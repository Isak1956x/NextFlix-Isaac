import SerieModel from '../models/SeriesModel.js';
import GenreModel from '../models/GenreModel.js'

export function GetHome(req, res, next) {
       SerieModel.GetAll((series) =>
    {
        GenreModel.GetAll((genres) =>
        {
        res.render('home/index', { 
        "page-title": 'Home', 
        seriesList: series,
        hasSeries: series.length > 0,
        genresList: genres,
        hasGenres: genres.length > 0
        })
       
    });
   })
}

