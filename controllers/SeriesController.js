import SerieModel from '../models/SeriesModel.js';
import GenreModel from '../models/GenreModel.js';
export function GetIndex(req, res, next) {
    SerieModel.GetAll((series) =>
    {
         GenreModel.GetAll((genres) =>
        {
        res.render('series/index', { 
        "page-title": 'Series', 
        seriesList: series,
        hasSeries: series.length > 0,
        genresList: genres
        })
    })
   })
}


export function GetCreate(req, res, next) {
 GenreModel.GetAll((genres) =>
 {

     res.render('series/save', { editMode: false, "page-title": 'Create Series', hasGenres: genres.length > 0, genresList:  genres});
 })
}

export function PostCreate(req, res, next) 
{
    const tiltle = req.body.title;
    const imageUrl = req.body.imageUrl;
    const youtubeUrl = req.body.youtubeUrl;
    const genre = req.body.genero;

    const serie = new SerieModel(
        0,
        tiltle,
        genre,
        imageUrl,
        youtubeUrl
    )
    serie.Save();
    res.redirect('/series/index');
}

export function GetEdit(req, res, next) {
    const id = req.params.serieId;
    SerieModel.GetById(id, (serie) =>
    {
        if(!serie)
        {
            return res.status(404).render("404", {"page-title": "Serie not found"});
        }
        GenreModel.GetAll((genres) =>
 {

     res.render('series/save', { editMode: true, "page-title": 'Edit Serie', hasGenres: genres.length > 0, genresList:  genres, serie: serie});
 })
     
    })
}

export function PostEdit(req, res, next) 
{
    const tiltle = req.body.title;
    const imageUrl = req.body.imageUrl;
    const youtubeUrl = req.body.youtubeUrl;
    const genre = req.body.genero;
    const id = req.body.serieId;

    const serie = new SerieModel(
       Number(id) ,
        tiltle,
        genre,
        imageUrl,
        youtubeUrl
    )
    serie.Save();
    res.redirect('/series/index');
}


export function Delete(req, res, next) 
{
    const id = req.body.serieId;
    SerieModel.Delete(id);
 
    res.redirect('/series/index');
}

export function GetDetails(req, res, next)
{
    const id = req.params.serieId;
    SerieModel.GetById(id, (serie) =>
    {
         if(!serie)
        {
            return res.status(404).render("404", {"page-title": "Serie not found"});
        }

         res.render("series/details",
            {
                serie: serie,
                "page-title": serie.title
            }
        )
    })
    
}

export function GetSearch(req, res , next)
{
    const title = req.query.serieTitle;
    SerieModel.GetAll((series) =>
    {
      const filtered = series.filter(s =>
  s.title.toLowerCase().includes(title.toLowerCase())
);
      GenreModel.GetAll((genres) =>
        {
        res.render('home/index', { 
        "page-title": 'Home', 
        seriesList: series,
        filteredList: filtered,
        hasSeries: series.length > 0,
        filterMode: true,
        genresList: genres,
        hasGenres: genres.length > 0
        })
       }
       )
    })
}

export function GetFilter(req, res , next)
{
    const genreId = req.query.genreId;
    SerieModel.GetAll((series) =>
    {
        if(genreId == "")
        {
            res.redirect('/')
        }
      const filtered = series.filter(s => s.genre == genreId);
      GenreModel.GetAll((genres) =>
        {
        res.render('home/index', { 
        "page-title": 'Home', 
        seriesList: series,
        filteredList: filtered,
        filterMode: true,
        hasSeries: series.length > 0,
        genresList: genres,
        hasGenres: genres.length > 0
        })
       }
       )
    })
}