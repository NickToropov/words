import {Component, OnInit} from "@angular/core";
import {IWord} from "../../core/words/words.model";
import {WordsService} from "../../core/words/words.service";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../dialogs/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {
  title = 'Words list';

  words: IWord[] = [];

  constructor(private wordsService: WordsService,
              private dialog: MatDialog) {
    wordsService.updateEvents.subscribe(event => {
      if (event.addedEntity) {
        this.handleAddEvent(event.addedEntity);
      } else if (event.updatedEntity) {
        this.handleUpdateEvent(event.updatedEntity);
      } else if (event.removedEntityId) {
        this.handleDeleteEvent(event.removedEntityId);
      }
    });
  }

  ngOnInit(): void {
    this.getWords();
  }

  getWords() {
    this.wordsService.getAll().subscribe(data => {
      this.words = data;
    });
  }

  deleteWord(event, id): void {
    event.stopPropagation();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      id: 2,
      title: 'Remove confirmation',
      description: 'Are you sure you want to remove selected word?'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(val => {
      if (!val) {
        return;
      }

      this.wordsService.delete(id)
        .subscribe(() => {
          this.getWords();
        }, error => {
          console.error(error);
          alert('Delete error')
        });
    });
  }

  private handleAddEvent(addedEntity: IWord): void {
    this.words = [
      ...this.words,
      addedEntity,
    ];
  }

  private handleUpdateEvent(updatedEntity: IWord): void {
    this.words = this.words.map(item => {
      if (item.id === updatedEntity.id) {
        item.name = updatedEntity.name;
      }
      return item;
    });
  }

  private handleDeleteEvent(removedEntityId: string): void {
    this.words = this.words.filter(item => item.id !== removedEntityId)
  }
}
