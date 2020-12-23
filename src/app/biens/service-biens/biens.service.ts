import {Injectable} from '@angular/core';
import {Bien} from '../bien.interface';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  private Biens: Bien[] = [
    {
      id: 1,
      category: 'Appartement',
      createAt: new Date(),
      description: 'Some quick example text to build on the card title and make up the bulk of the content.',
      image: 'https://source.unsplash.com/1080x720?homes',
      price: 400000,
      sale: true,
      state: 0,
      title: 'Bien 1'
    },
    {
      id: 2,
      category: 'Voiture',
      createAt: new Date(),
      description: 'Some quick example text to build on the card title and make up the bulk of the content.',
      image: 'https://source.unsplash.com/1080x720?cars',
      price: 400000,
      sale: true,
      state: 0,
      title: 'Bien 2'
    },
    {
      id: 3,
      category: 'Argent',
      createAt: new Date(),
      description: 'Some quick example text to build on the card title and make up the bulk of the content.',
      image: 'https://source.unsplash.com/1080x720?moneys',
      price: 400000,
      sale: true,
      state: 0,
      title: 'Bien 3'
    },
    {
      id: 4,
      category: 'Avion',
      createAt: new Date(),
      description: 'Some quick example text to build on the card title and make up the bulk of the content.',
      image: 'https://source.unsplash.com/1080x720?travels',
      price: 400000,
      sale: true,
      state: 0,
      title: 'Bien 4'
    },
    {
      id: 5,
      category: 'Ordinateur',
      createAt: new Date(),
      description: 'Some quick example text to build on the card title and make up the bulk of the content.',
      image: 'https://source.unsplash.com/1080x720?computers',
      price: 400000,
      sale: true,
      state: 0,
      title: 'Bien 5'
    },
    {
      id: 6,
      category: 'Entreprise',
      createAt: new Date(),
      description: 'Some quick example text to build on the card title and make up the bulk of the content.',
      image: 'https://source.unsplash.com/1080x720?businesss',
      price: 400000,
      sale: true,
      state: 0,
      title: 'Bien 5'
    }
  ];

  constructor() {
  }

  getAllBiens() {
    return this.Biens;
  }

  getBienById(id: number): Bien {
    const bienFound = this.Biens.find(
      (b: Bien) => {
        return b.id === id;
      }
    );
    return bienFound;
  }

  addBiens(newBien: Bien) {
    this.Biens.push(newBien);
  }

  updateBien(bienUpdate: Bien) {
    let oldBien: Bien = this.Biens.find(
      (b: Bien) => {
        return b.id === bienUpdate.id;
      }
    );
    if (oldBien) {
      oldBien = {...bienUpdate};
    }
  }

  getLastId(): number {
    return this.Biens[this.Biens.length - 1] ?
      this.Biens[this.Biens.length - 1].id : 0;
  }
}
