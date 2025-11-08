import path from 'path';
import {projectRoot} from '../utils/path.js';
import {SaveDataInFile, GetAllDataFromFile} from '../utils/fileHandler.js'

const dataPath = path.join(projectRoot, 'data', 'series.json');


class Serie
{
    constructor(id, title, genre, imageUrl, youtubeUrl)
    {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.imageUrl = imageUrl;
        this.youtubeUrl = youtubeUrl;
    }

    Save()
    {
        GetAllDataFromFile(dataPath, (seriesList) =>
        {
            if(this.id !== 0)
           {
           const editSerieIndex = seriesList.findIndex(
                (serie) => serie.id === Number(this.id) );
            seriesList[editSerieIndex] = this;
            SaveDataInFile(dataPath, seriesList)
           }
           else
           {
             this.id = Math.random() * 1000;
            seriesList.push(this);
            SaveDataInFile(dataPath, seriesList);
           }
        });
    }

    static GetAll(callBack)
    {
        GetAllDataFromFile(dataPath, callBack);
    }

   static GetById(id, callback) {
    GetAllDataFromFile(dataPath, (series) => {
      const serie = series.find(
        (serie) => serie.id === Number(id)
      );
      if (serie) {
        callback(serie);
      } else {
        callback(null);
      }
    });
  }
       


    static Delete(id)
    {
        GetAllDataFromFile(dataPath, (series)=>
        {
            const newSeriesList = series.filter((seriesList) =>
            {
                return seriesList.id !== Number(id);
            });
            SaveDataInFile(dataPath, newSeriesList);
        })
    }
}

export default Serie;