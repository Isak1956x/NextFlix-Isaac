import GenreModel from '../models/GenreModel.js';
export function GetIndex(req, res, next) {
    GenreModel.GetAll((genres) =>
    {
        res.render('generos/index', { 
        "page-title": 'Genres', 
        genresList: genres,
        hasGenres: genres.length > 0
    });
    })
}

export function GetCreate(req, res, next) {
    res.render('generos/save', { editMode: false, "page-title": 'Create Genre'});
}

export function PostCreate(req, res, next) 
{
    console.log(req.body)
    const title = req.body.genreName;

    const genre = new GenreModel(
        0,
        title
    )
    genre.Save();
    res.redirect('/generos/index');
}

export function GetEdit(req, res, next) {
    const id = req.params.genreId;
    GenreModel.GetById(id, (genre) =>
    {
        if(!genre)
        {
            return res.status(404).render("404", {"page-title": "Genre not found"});
        }
        res.render("generos/save",
            {
                genre: genre,
                "page-title": "Edit Genre",
                editMode: true
            }
        )
    })
}

export function PostEdit(req, res, next) 
{
    const id = req.body.genreId;
    const tiltle = req.body.genreName;

    const genre = new GenreModel(
       Number(id) ,
        tiltle
    )
    genre.Save();
    res.redirect('/generos/index');
}


export function Delete(req, res, next) 
{
    const id = req.body.genreId;
    GenreModel.Delete(id);
 
    res.redirect('/generos/index');
}
