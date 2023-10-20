import { Time } from "@angular/common";
import { Category } from "./Category";
import { Yazar } from "./Yazar";

export class Blog
{
  content: string | undefined;
  id: number| undefined;
  title: string| undefined;
  yazar : Yazar| undefined;
  category : Category |undefined;
  categoryId: number |undefined;
  yazarId: number|undefined;
  imageUrl: string|undefined;
  createdDate : Time |undefined;
}
