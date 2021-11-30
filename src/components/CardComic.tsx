import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IComic } from '../interfaces/comics'

interface props {
    comic: IComic
}

const CardComic = ({ comic }: props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {comic.title}
                </Typography>
                {
                    comic.description && <Typography variant="body2" color="text.secondary">
                        {comic.description}
                    </Typography>
                }

            </CardContent>
            <CardActions>
                <Button size="small">Selecionar</Button>
                <Button size="small">Exibir Detalhes</Button>
            </CardActions>
        </Card>

    );
}

export default CardComic;