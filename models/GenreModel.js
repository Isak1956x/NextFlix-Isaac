import path from 'path';
import {projectRoot} from '../utils/path.js';
import {SaveDataInFile, GetAllDataFromFile} from '../utils/fileHandler.js'

const dataPath = path.join(projectRoot, 'data', 'genre.json');


class Genre
{
    constructor(id, genreTitle)
    {
        this.id = id;
        this.genreTitle = genreTitle
    }

    Save()
    {
        GetAllDataFromFile(dataPath, (genreList) =>
        {
            if(this.id !== 0)
           {
           const editGenreIndex = genreList.findIndex(
                (genre) => genre.id === Number(this.id) );
            genreList[editGenreIndex] = this;
            SaveDataInFile(dataPath, genreList)
           }
           else
           {
             this.id = Math.random() * 1000;
            genreList.push(this);
            SaveDataInFile(dataPath, genreList);
           }
        });
    }

    static GetAll(callBack)
    {
        GetAllDataFromFile(dataPath, callBack);
    }

   static GetById(id, callback) {
    GetAllDataFromFile(dataPath, (genres) => {
      const genre = genres.find(
        (genre) => genre.id === Number(id)
      );
      if (genre) {
        callback(genre);
      } else {
        callback(null);
      }
    });
  }
       


    static Delete(id)
    {
        GetAllDataFromFile(dataPath, (genre)=>
        {
            const newGenreList = genre.filter((genreList) =>
            {
                return genreList.id !== Number(id);
            });
            SaveDataInFile(dataPath, newGenreList);
        })
    }
}

export default Genre;