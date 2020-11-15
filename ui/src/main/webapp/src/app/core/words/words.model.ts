export interface IWord {
  id: any;
  name: string;
}

export interface IUpdateMessage {
  addedEntity: IWord;
  updatedEntity: IWord;
  removedEntityId: string;
}

export class Word implements IWord {
  constructor(
        public id: any,
        public name: string
    ) {
        this.id = id;
        this.name = name;
    }
}
