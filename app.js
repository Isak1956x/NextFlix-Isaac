import express from 'express';  
import { engine } from 'express-handlebars';  
import path from 'path';  
import {projectRoot} from './utils/path.js';
import homeRoutes from './routes/homeRoutes.js';
import generosRoutes from './routes/genresRoutes.js';
import seriesRoutes from './routes/seriesRoutes.js';

const app = express();  

app.engine('hbs', engine(
    {
       layoutsDir: "views/layouts" ,
       defaultLayout: "main-layout",
       extname: "hbs",
       helpers: {
        getGenreTitle: function(genresList, genreId) {
        if (!genresList || !genreId) return "Unknown";
        const genre = genresList.find(type => Number(type.id) === Number(genreId));
        return genre ? genre.genreTitle : "Unknown";
      },
      section: function(name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
       }
    }
));
app.set('view engine', 'hbs');  
app.set('views', 'views');

app.use(express.urlencoded());
app.use(express.static(path.join(projectRoot, 'public')));


app.use(homeRoutes);
app.use( "/generos",generosRoutes);
app.use( "/series",seriesRoutes);

//404 handler
app.use((req, res) => 
{
    res.status(404).render('404', { "page-title": 'Page Not Found'});
});

app.listen(8080);