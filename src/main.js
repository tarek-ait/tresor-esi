import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const store = createStore({
    state () {
      return {
        searchKey:'',
        results:[],
        years:[
            [ // the first year 
                [ // the first semester
                    {
                        name:'ELECT - Electricité',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'BWEB - Bureautique et Web',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANG1 - Anglais 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANA1 - Analyse mathématique 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ALSDS - Algorithmique et Structures de Données Statiques',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ARCHI1 - Architecture de l_ordinateur 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ALG1 - Algèbre 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'SYST1 - Introduction au Système d_exploitation 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'TEE - Techniques d_Expression Ecrite',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
                [ // the second semseter
                    {
                        name:'ALSDD - Algorithmique et Structures de Données Dynamiques',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'SYST2 - Introduction au Système d_exploitation 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANG1 - Anglais 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'TEO - Techniques d_Expression Orale',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ALG2 - Algèbre 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANA2 - Analyse mathématique 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ELECF1 - Electronique Fondamentale 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'MECA - Mécanique du point',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
            ],
            [ // the second year 
                [ // the first semester
                    {
                        name:'ECON - Economie d_entreprise',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANA3 - Analyse Mathématique 3',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ARCHI2 - Architecture des ordinateurs 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ELECF2 - Electronique fondamentale 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANG2 - Anglais',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ALG3 - Algèbre 3',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'SFSD - Structure Fichiers et Structures de Données',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'PRST1 - Probabilité _ Statistiques 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
                [ // the second semester
                    {
                        name:'ANG3 - Anglais',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'LOGM - Logique Mathématique',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'OPTOE - Optique et ondes éléctromagnétiques',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'PRST2 - Probabilité _ Statistiques 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'POO - Programmation orientée objet',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANA4 - Analyse Mathématique 4',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'SINF - Système d’Information',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'PRJP - Projet 2CPI',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
                [ // the second year concours
                    {
                        name:'2014',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2011',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2012',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2013',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2017',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2015',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2018',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2016',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'utiles pour la revision',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2019',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Formulaire_Inscription_ ESI -JUIN 2016.pdf',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Poster_concours_ESI_2016.jpg',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
                [ // the second year resume
                    {
                        name:'Archithecture des Ordinateurs',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Analyse Numérique',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ALSDS',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Algébre',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Economie d_Entreprise',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Analyse',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Electronique Fondamentale',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Programmation Orientée Objet (POO)',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Optique',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Probabilités et Statistiques',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Structures de Données et Structures de Fichiers ( SFSD )',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
                [ // the second year sba
                    {
                        name:'2CPI SBA 2015_2016',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'2CPI_MD_2018_2019',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ]
            ],
            [ // the third yaer 
                [ // the first semester
                    {
                        name:'SYC1 - Systèmes d\'exploitation centralisés 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'IGL - Introduction au Génie logiciel',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'RO - Recherche Opérationnelle',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'THP - Théorie des langages de programmation',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ORGA - Analyse des organisations',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'RES1 - Réseaux 1',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'ANUM - Analyse Numérique',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Anglais',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ],
                [ // the second semester
                    {
                        name:'ARCHI3 - Architecture des ordinateurs 3',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'CPRJ - Conduite de Projet',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Anglais',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'RES2 - Réseaux 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Projet 1CS',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'BDD - Base De Données',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'MCSI - Méthodologie de Conception des Systèmes d’Information',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'SEC - Sécurité Informatique',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'SYC2 - Systèmes d_exploitation centralisés 2',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ]
            ],
            [ // the fourth year 
                [  // the first specialization CALLED SID
                    [  // the first semester
                        {
                            name:'HPC - High Performance Computing',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ML - Machine Learning',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ANAD - Analyse De Données',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BDA - SGBD et Base De Données Avancées',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TSG - Traitement du Signal',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'CRP - Complexité et Résolution de Problème',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'INFOVIS - Visualisation de l’information',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MASD - Mathématiques avancées pour la science de données',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SGOV - Smart Government',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ],
                    [ // the second semester
                        {
                            name:'RV - Réalité Virtuelle',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BI - Business Intelligence',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IMN - Images Numériques',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'PMSS - Processus, Modèles et Simulation Stochastiques',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TOAI - Techniques d’optimisation et Intelligence Artificielle',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IRIAD - Informatique Répartie et Intelligence Artificielle distribuée',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'RCR - Représentation des Connaissances et Raisonnement',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TALN - Traitement automatique du langage naturel',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ]
                ],
                [ // the second specialization CALLED SIL
                    [  // the first semester
                        {
                            name:'IHM - Interfaces Homme Machine',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MAGIL - Méthodes Agiles',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'Stage',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TPGO',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'PDC - Patrons De Conception',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'WEB - Technologies De Developpement Web',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'OUTILS - Outils GL',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'COMPIL - Compilation',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ANAD - Analyse De Données',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ],
                    [ // the second semester
                        {
                            name:'MBL2_Mobile 2',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BDM - Big Data mining',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'QLOG - Qualité Logicielle',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ENTP- Entreprenariat',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IHM - Interface Homme Machine',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MBL1_Mobile1',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MNG- management',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ALOG - Architectures Logicielles',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BDA - SGBD et Bases de Données Avancées',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ]
                ],
                [ // the third specialization CALLED SIQ
                    [  // the first semester
                        {
                            name:'RESA - Réseaux Avancés',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'STAGE',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TPGO - Théorie de la Programmation et Graphes Orientés',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'COMPIL - Compilation',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ANAD - Analyse De Données',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'FAS - File d_Attente et Simulation',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ],
                    [ // the second semester
                        {
                            name:'SSR - Sécurité Systèmes et Réseaux',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SYSR - Systèmes Répartis',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BDA - SGBD et Base de Données Avancées',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'Projet_2CS',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'OPTM - Optimisation Combinatoire',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ALOG - Architectures logicielles',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ]
                ],
                [ // the fourth specialization CALLED SIT
                    [  // the first semester
                        {
                            name:'AQUA - Assurance Qualité',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ASI - Analyse des Systèmes d’Information',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TICO - TIC en Organisation',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BDA - SGBD et Base De Données Avancées',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MPSI - Conduite de changement',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SIAD - Systèmes d_Aide à la Décision',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ANAD - Analyse De Données',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'EMDs.pdf',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ],
                    [ // the second semester
                        {
                            name:'Projet 2CS',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SIC - Systèmes d’Information Coopératifs',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MSSI-Management de la Sécurité des SI',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'Projet Sécurité Système d_Information',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'FASI - File d_attente et Simulation',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'COFI - Comptabilité _ Finance',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'AL - Architecture Logicielle',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ERP - Enterprise Ressource Planning',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ]
                ],
                [ // the fourth year optional modules 
                    [
                        {
                            name:'RV - Réalité Virtuelle',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'VCL - Virtualization and Cloud Computing',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'VEILLE - Veille Technologique (SIL)',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'URBA - Urbanisation des Systèmes d_Information',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TPGO - Théorie de la Programmation (SIL)',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'VEILLE - Veille Technologique',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TSG - Traitement du Signal',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'Programmation Mobile',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'TICO - TIC en Organisation (SIL)',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SIG - Systèmes d_Information Géographiques (SIL)',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ML - Machine Learning',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'Programmation Web',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SEMB - Systèmes Embarqués',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IPLS - Ingénierie des Protocoles et Logiciels Sécurisés (SIL)',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                    ],
                    [
                        {
                            name:'MNG - Management',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'SIG - Systèmes d_Information Géographique',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'MSS - Modèles stochastiques et simulation',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'AUDIT - Audit et Gouvernance des SI',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BI - Business Intelligence',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'HPC - High Performance Computing',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IPLS - Ingénierie des Protocoles et Logiciels Sécurisés',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'BDM - Big Data Mining',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IMN - Images Numériques',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'IHM - Interface Homme Machine',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'AQUA - Assurance Qualité (SIL)',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        },
                        {
                            name:'ENTP - Entrepreneuriat',
                            link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                        }
                    ]
                ]
            ],
            [ // the fifth year and the last one 
                [ // master degree
                [
                    {
                        name:'Intelligence Artificielle',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Architectures des Systèmes d_Information',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Valorisation de la recherche',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Systèmes distribués',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Technologie Agents',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Machine Learning',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Introduction à la méthodologie de recherche',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                ],
                [
                    {
                        name:'Schéma Directeur Informatique',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },  
                    {
                        name:'Réseaux Avancés et Simulation',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Recherche documentaire et la communication de la recherche',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Visualisation des Informations (INFOVIZ)',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Recherche d_information',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Présentation Master 2015-2016.docx',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Présentation Master 2015-2016(1).docx',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ]
                ],
                [ // doctorat concours
                    {
                        name:'Option Systèmes Informatiques (SIQ)',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Option Système d_Information (SI)',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'Concours Doctorat ESI__2017-2018.pdf',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    },
                    {
                        name:'FormulairePreselection_2017-2018.pdf',
                        link:'https://youtu.be/WPywfWMPgt4?si=k_2_zr_rrngmm7f5'
                    }
                ]
            ]
        ]
      }
    },
    mutations:{
        search(state) {
            state.results = []; // initializing the results table to be an empty array
            // state.searchKey = state.searchKey.toUpperCase(); 
            for (let yearKey in state.years) {
                let year = state.years[yearKey];
                for (let tableKey in year) {
                    let table = year[tableKey];
                    for (let recordKey in table) {
                        let record = table[recordKey];
                        if (Array.isArray(record)) {
                            record.forEach((nestedRecord) => {
                                if (nestedRecord.name.includes(state.searchKey.toUpperCase())  || nestedRecord.name.includes(state.searchKey)) {
                                    state.results.push(nestedRecord); // Push the parent record
                                }
                            });
                        } else {
                            if (record.name.includes(state.searchKey.toUpperCase()) || record.name.includes(state.searchKey)) {
                                state.results.push(record); // Push the parent record
                            }
                        }
                    }
                }
            }
        }
    }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
