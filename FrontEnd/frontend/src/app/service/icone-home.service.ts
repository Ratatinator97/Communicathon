export class HomeIconeService {

    mesIcones= [
        {
            nomIcone:"Carte d'identité",
            classe: "carteid",
            dirigeVers:"cardid/list",
            lienImage: "http://localhost:4000/images/ic-carteid.png"

        },

        {
            nomIcone:"PictoMails",
            classe: "photo",
            dirigeVers:"mail/image",
            lienImage: "http://localhost:4000/images/ic-mail.png"
        },

// Pour une prochaine version.
        /*{
            nomIcone:"Videos",
            classe: "video",
            dirigeVers:"",
            lienImage: "http://localhost:4000/images/ic-video.png"
        },
        {
            nomIcone:"Calendrier",
            classe: "calendar",
            dirigeVers:"",
            lienImage: "http://localhost:4000/images/ic-calendrier.png"
        },
*/ 

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
            lienImage: "http://localhost:4000/images/ic-carnet.jpg"
        },

        {
            nomIcone:"Rapport",
            classe: "rapport",
            dirigeVers:"rapport",
            lienImage: "http://localhost:4000/images/ic-rapport.jpg"
        
        }
          
    ];
}