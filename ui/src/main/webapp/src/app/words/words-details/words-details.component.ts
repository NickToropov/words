import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {IWord, Word} from "../../core/words/words.model";
import {WordsService} from "../../core/words/words.service";
import {Observable} from "rxjs";
import {ConfirmDialogService} from "../../dialogs/confirm-dialog.service";
import {CanComponentDeactivate} from "../../guards/can-deactivate.guard";

@Component({
  selector: 'app-words-details',
  templateUrl: './words-details.component.html',
  styleUrls: ['./words-details.component.css']
})
export class WordDetailsComponent implements OnInit, CanComponentDeactivate {

  word: IWord;

  name: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private wordsService: WordsService,
              private confirmDialogService: ConfirmDialogService) {
  }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    (id ? this.wordsService.getWord(id) : Observable.of(new Word("", "Test name")))
      .subscribe(data => {
        this.word = data;
        this.name = data.name;
      }, err => {
        this.word = new Word("", "Test name");
        this.name = "Test name";
      });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.word.name === this.name) {
      return true;
    }
    return this.confirmDialogService.confirm('Discard changes?');
  }

  save(): void {
    const wordToSave = new Word(this.word.id, this.name);
    this.wordsService.save(wordToSave)
      .subscribe(data => {
        Object.assign(this.word, {
          name: data.name
        });
        this.goBack();
      }, error => {
        console.error(error);
        alert(`Save error`);
      });
  }

  goBack(): void {
    this.router.navigate([this.word.id ? '../../' : '../'], {
      relativeTo: this.route,
      replaceUrl: true
    });
  }
}
