export class HomeIconeService {

    mesIcones= [
        {
            nomIcone:"Carte d'identité",
            classe: "carteid",
            dirigeVers:"cardid/list",
            lienImage: "http://localhost:4000/images/ic-carteid.png"

        },

        {
            nomIcone:"Calendrier",
            classe: "calendar",
            dirigeVers:"",
            lienImage: "http://localhost:4000/images/ic-calendrier.png"
        },

        {
            nomIcone:"Photos",
            classe: "photo",
            dirigeVers:"mail/image",
            lienImage: "http://localhost:4000/images/ic-photo.png"
        },

        {
            nomIcone:"Videos",
            classe: "video",
            dirigeVers:"",
            lienImage: "http://localhost:4000/images/ic-video.png"
        },

        {
            nomIcone:"Liens",
            classe: "lien",
            dirigeVers:"links/list",
            lienImage: "http://localhost:4000/images/ic-lien.png"
        },

        {
            nomIcone:"Carnet de Bord",
            classe: "fiche",
            dirigeVers:"ficheWE/list",
            lienImage: "http://localhost:4000/images/ic-carnet.jpeg"
        }
          
    ];
}