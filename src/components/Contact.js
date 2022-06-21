.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 35%;
    height: 75%;
    border-radius: 10px;
    background-color: bisque;
    display: flex;
    flex-direction: row;
    margin: 20px 415px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
    border-radius: 50%;
    width: 30%;
    height: 30%;
    padding: 10px;
}

.container {
    padding: 0 50px;
}

@media only screen and (max-width: 375px) {
    .card {
        margin: 10px 58px;
        width: 70%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border-radius: 50%;
        width: 40%;
        height: 40%;
        padding: 30px 10px;
    }

    .container {
        padding: 5px;
        font-size: 12px;
    }

    h1 {
        font-size: 14px;
    }

    h4 {
        font: 5px;
    }
}

@media only screen and (max-width:768px) {
    .card {
        margin: 10px 50px;
        width: 70%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border-radius: 50%;
        width: 40%;
        height: 40%;
        padding: 30px 10px;
    }

    .container {
        padding: 7px;
        font-size: 14px;
    }
}

@media only screen and (max-width:920px) {
    .card {
        margin: 10px 275px;
        width: 40%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border-radius: 50%;
        width: 30%;
        height: 30%;
        padding: 30px 10px;
    }

    .container {
        padding: 7px;
        font-size: 14px;
    }

    h1 {
        font-size: 18px;
    }

    h4 {
        font: 16px;
    }
}
