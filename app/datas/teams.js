import allemagne_logo from '../assets/teams_logo/allemagne_logo.png'
import allemagne_flag from '../assets/flag/allemagne_flag.png'

import angleterre_logo from '../assets/teams_logo/angleterre_logo.png'
import angleterre_flag from '../assets/flag/angleterre_flag.png'

import autriche_logo from '../assets/teams_logo/autriche_logo.png'
import autriche_flag from '../assets/flag/autriche_flag.png'

import belgique_logo from '../assets/teams_logo/belgique_logo.png'
import belgique_flag from '../assets/flag/belgique_flag.png'

import croatie_logo from '../assets/teams_logo/croatie_logo.png'
import croatie_flag from '../assets/flag/croatie_flag.png'

import danemark_logo from '../assets/teams_logo/danemark_logo.png'
import danemark_flag from '../assets/flag/danemark_flag.png'

import ecosse_logo from '../assets/teams_logo/ecosse_logo.png'
import ecosse_flag from '../assets/flag/ecosse_flag.png'

import espagne_logo from '../assets/teams_logo/espagne_logo.png'
import espagne_flag from '../assets/flag/espagne_flag.png'

import finlande_logo from '../assets/teams_logo/finlande_logo.png'
import finlande_flag from '../assets/flag/finlande_flag.png'

import france_logo from '../assets/teams_logo/france_logo.png'
import france_flag from '../assets/flag/france_flag.png'

import hongrie_logo from '../assets/teams_logo/hongrie_logo.png'
import hongrie_flag from '../assets/flag/hongrie_flag.png'

import italie_logo from '../assets/teams_logo/italie_logo.png'
import italie_flag from '../assets/flag/italie_flag.png'

import macedoine_logo from '../assets/teams_logo/macedoine_logo.png'
import macedoine_flag from '../assets/flag/macedoine_flag.png'

import pays_bas_logo from '../assets/teams_logo/pays_bas_logo.png'
import pays_bas_flag from '../assets/flag/pays_bas_flag.png'

import pays_de_galles_logo from '../assets/teams_logo/pays_de_galles_logo.png'
import pays_de_galles_flag from '../assets/flag/pays_de_galles_flag.png'

import pologne_logo from '../assets/teams_logo/pologne_logo.png'
import pologne_flag from '../assets/flag/pologne_flag.png'

import portugal_logo from '../assets/teams_logo/portugal_logo.png'
import portugal_flag from '../assets/flag/portugal_flag.png'

import rep_tcheque_logo from '../assets/teams_logo/rep_tcheque_logo.png'
import rep_tcheque_flag from '../assets/flag/rep_tcheque_flag.png'

import russie_logo from '../assets/teams_logo/russie_logo.png'
import russie_flag from '../assets/flag/russie_flag.png'

import slovaquie_logo from '../assets/teams_logo/slovaquie_logo.png'
import slovaquie_flag from '../assets/flag/slovaquie_flag.png'

import suede_logo from '../assets/teams_logo/suede_logo.png'
import suede_flag from '../assets/flag/suede_flag.png'

import suisse_logo from '../assets/teams_logo/suisse_logo.png'
import suisse_flag from '../assets/flag/suisse_flag.png'

import turquie_logo from '../assets/teams_logo/turquie_logo.png'
import turquie_flag from '../assets/flag/turquie_flag.png'

import ukraine_logo from '../assets/teams_logo/ukraine_logo.png'
import ukraine_flag from '../assets/flag/ukraine_flag.png'


const teams = [
    {
        id: 'DEU',
        name: 'Allemagne',
        flag: allemagne_flag,
        logo: allemagne_logo,
        groupe: 'Groupe F',
        trainer: 'Joachim Löw',
        players:{
            gardiens:[
                'Manuel Neuer',
                'Bernd Leno',
                'Kevin Trapp'
            ],
            defenseurs:[
                'Antonio Rüdiger',
                'Matthias Ginter',
                'Mats Hummels',
                'Niklas Süle',
                'Lukas Klostermann',
                'Robin Gosens',
                'Emre Can',
                'Robin Koch',
                'Christian Günter'
            ],
            milieux: [
                'Marcel Halstenberg',
                'Joshua Kimmich',
                'Toni Kroos',
                'Jonas Hofmann',
                'Jamal Musiala',
                'Florian Neuhaus',
                'Leon Goretzka',
                'Ilkay Gündogan'
            ],
            attaquants: [
                'Kai Havertz',
                'Kevin Volland',
                'Serge Gnabry',
                'Timo Werner',
                'Leroy Sané',
                'Thomas Muller'
            ]
        }
    },
    {
        id: 'UK',
        name: 'Angleterre',
        flag: angleterre_flag,
        logo: angleterre_logo,
        groupe: 'Groupe D',
        trainer: 'Gareth Southgate',
        players:{
            gardiens:[
                'Jordan Pickford',
                'Sam Johnstone',
                'Dean Henderson'
            ],
            defenseurs:[
                'Kyle Walker',
                'Luke Shaw',
                'Tyrone Mings',
                'John Stones',
                'Harry Maguire',
                'Conor Coady'
            ],
            milieux: [
                'Kieran Trippier',
                'Declan Rice',
                'Bukayo Saka',
                'Jude Bellingham',
                'Jack Grealish',
                'Marcus Rashford',
                'Kalvin Phillips',
                'Jordan Henderson',
                'Mason Mount',
                'Phil Foden',
                'Ben Chilwell',
                'Reece James'
            ],
            attaquants: [
                'Harry Kane',
                'Raheem Sterling',
                'Dominic Calvert-Lewin',
                'Jadon Sancho'
            ]
        }
    },
    {
        id: 'AUT',
        name: 'Autriche',
        flag: autriche_flag,
        logo: autriche_logo,
        groupe: 'Groupe C',
        trainer: 'Franco Foda',
        players:{
            gardiens:[
                'Alexander Schlager',
                'Pavao Pervan',
                'Daniel Bachmann'
            ],
            defenseurs:[
                'Andreas Ulmer',
                'Aleksandar Dragovic',
                'Martin Hinteregger',
                'Stefan Posch',
                'David Alaba',
                'Philipp Lienhart',
                'Stefan Lainer',
                'Marco Friedl'
            ],
            milieux: [
                'Stefan Ilsanker',
                'Marcel Sabitzer',
                'Florian Grillitsch',
                'Julian Baumgartlinger',
                'Christopher Trimmel',
                'Louis Schaub',
                'Alessandro Schöpf',
                'Christoph Baumgartner',
                'Karim Onisiwo',
                'Valentino Lazaro',
                'Xaver Schlager',
                'Konrad Laidmer'
            ],
            attaquants: [
                'Marko Arnautovic',
                'Michael Gregoritsch',
                'Sasa Kalajdzic'
            ]
        }
    },
    {
        id: 'BEL',
        name: 'Belgique',
        flag: belgique_flag,
        logo: belgique_logo,
        groupe: 'Groupe B',
        trainer: 'Roberto Martinez',
        players:{
            gardiens:[
                'Thibaut Courtois',
                'Simon Mignolet',
                'Matz Sels'
            ],
            defenseurs:[
                'Toby Alderweireld',,
                'Thomas Vermaelen',
                'Dedryck Boyata',
                'Jan Vertonghen',
                'Thomas Meunier',
                'Jason Denayer',
                'Timothy Castagne'
            ],
            milieux: [
                'Axel Witsel',
                'Kevin De Bruyne',
                'Youri Tielemans',
                'Eden Hazard',
                'Yannick Carrasco',
                'Thorgan Hazard',
                'Hans Vanaken',
                'Leander Dendoncker',
                'Nacer Chadli',
                'Dennis Praet'
            ],
            attaquants: [
                'Romelu Lukaku',
                'Dries Mertens',
                'Christian Benteke',
                'Michy Batshuayi',
                'Leandro Trossard',
                'Jeremy Doku'
            ]
        }
    },
    {
        id: 'HRV',
        name: 'Croatie',
        flag: croatie_flag,
        logo: croatie_logo,
        groupe: 'Groupe D',
        trainer: 'Zlatko Dalic',
        players:{
            gardiens:[
                'Dominik Livakovic',
                'Lovre Kalinic',
                'Simon Sluga'
            ],
            defenseurs:[
                'Sime Vrsaljko',
                'Borna Barisic',
                'Duje Caleta-Car',
                'Dejan Lovren',
                'Mile Skoric',
                'Domagoj Vida',
                'Josip Juranovic',
                'Domagoj Bradaric',
                'Josko Gvardiol'
            ],
            milieux: [
                'Ivan Perisic',
                'Mateo Kovacic',
                'Luka Modric',
                'Marcelo Brozovic',
                'Nikola Vlasic',
                'Mario Pasalic',
                'Mislav Orsic',
                'Milan Badelj',
                'Luka Ivanusec'
            ],
            attaquants: [
                'Josip Brekalo',
                'Andrej Kramaric',
                'Ante Budimir',
                'Ante Rebic',
                'Bruno Petkovic'
            ]
        }
    },
    {
        id: 'DNK',
        name: 'Danemark',
        flag: danemark_flag,
        logo: danemark_logo,
        groupe: 'Groupe B',
        trainer: 'Kasper Hjulmand',
        players:{
            gardiens:[
                'Kasper Schmeichel',
                'Jonas Lössl',
                'Frederik Rønnow'
            ],
            defenseurs:[
                'Joachim Andersen',
                'Jannik Vestergaard',
                'Simon Kjear',
                'Joakim Maehle',
                'Andreas Christensen',
                'Mathias Jørgensen',
                'Jens Stryger Larsen',
                'Nicolai Boilesen'
            ],
            milieux: [
                'Robert Skov',
                'Thomas Delaney',
                'Christian Eriksen',
                'Christian Nørgaard',
                'Daniel Wass',
                'Pierre-Emile Højbjerg',
                'Mathias Jensen',
                'Anders Christiansen'
            ],
            attaquants: [
                'Martin Braithwaite',
                'Andreas Skov Olsen',
                'Kasper Dolberg',
                'Mikkel Damsgaard',
                'Jonas Wind',
                'Yussuf Poulsen',
                'Andreas Cornelius'
            ]
        }
    },{
        id: 'SCO',
        name: 'Ecosse',
        flag: ecosse_flag,
        logo: ecosse_logo,
        groupe: 'Groupe D',
        trainer: 'Steve Clarke',
        players:{
            gardiens:[
                'David Marshall',
                'Craig Gordon',
                'Jon McLaughlin'
            ],
            defenseurs:[
                'Stephen O\'Donnell',
                'Andrew Robertson',
                'Grant Hanley',
                'Kieran Tierney',
                'Greg Taylor',
                'Declan Gallagher',
                'Liam Cooper',
                'Nathan Patterson',
                'Jack Hendry',
                'Scott McKenna'
            ],
            milieux: [
                'Scott McTominay',
                'John McGinn',
                'Callum Mcgregor',
                'Ryan Christie',
                'John Fleck',
                'Stuart Armstrong',
                'David Turnbull',
                'Ryan Fraser',
                'Billy Gilmour',
                'James Forrest'
            ],
            attaquants: [
                'Lyndon Dykes',
                'Ché Adams',
                'Kevin Nisbet'
            ]
        }
    },
    {
        id: 'ESP',
        name: 'Espagne',
        flag: espagne_flag,
        logo: espagne_logo,
        groupe: 'Groupe E',
        trainer: 'Luis Enrique',
        players:{
            gardiens:[
                'David de Gea',
                'Robert Sanchez',
                'Unai Simon'
            ],
            defenseurs:[
                'César Azpilicueta',
                'Diego Llorente',
                'Pau Torres',
                'Eric Garcia',
                'José Gaya',
                'Jordi Alba',
                'Aymeric Laporte'
            ],
            milieux: [
                'Sergio Busquets',
                'Marcos Llorente',
                'Koke',
                'Thiago Alcantara',
                'Ferran Torres',
                'Rodri',
                'Fabian Ruiz',
                'Dani Olmo',
                'Adama Traoré',
                'Pablo Sarabia'
            ],
            attaquants: [
                'Alvaro Morata',
                'Gerard Moreno',
                'Mikel Oyarzabal',
                'Pedri'
            ]
        }
    },
    {
        id: 'FIN',
        name: 'Finlande',
        flag: finlande_flag,
        logo: finlande_logo,
        groupe: 'Groupe B',
        trainer: 'Markku Kanerva',
        players:{
            gardiens:[
                'Lukas Hradecky',
                'Jesse Joronen',
                'Anssi Jaakkola'
            ],
            defenseurs:[
                'Paulus Arajuuri',
                'Daniel O\'Shaughnessy',
                'Joona Toivio',
                'Leo Väisänen',
                'Nicholas Hämäläinen',
                'Thomas Lam',
                'Jere Uronen',
                'Jukka Raitala',
                'Robert Ivanov'
            ],
            milieux: [
                'Glen Kamara',
                'Robert Taylor',
                'Robin Lod',
                'Fredrik Jensen',
                'Rasmus Schüller',
                'Pyry Soiri',
                'Tim Sparv',
                'Nikolai Alho',
                'Joni Kauko',
                'Onni Valakari'
            ],
            attaquants: [
                'Teemu Pukki',
                'Joel Pohjanpalo',
                'Lassi Lappalainen',
                'Marcus Forss'
            ]
        }
    },
    {
        id: 'FRA',
        name: 'France',
        flag: france_flag,
        logo: france_logo,
        groupe: 'Groupe F',
        trainer: 'Didier Deschamps',
        players:{
            gardiens:[
                'Hugo Lloris',
                'Steve Mandanda',
                'Mike Maignan'
            ],
            defenseurs:[
                'Benjamin Pavard',
                'Presnel Kimpembe',
                'Raphaël Varane',
                'Clément Lenglet',
                'Kurt Zouma',
                'Lucas Digne',
                'Lucas Hernandez',
                'Léo Dubois',
                'Jules Koundé'
            ],
            milieux: [
                'Paul Pogba',
                'Thomas Lemar',
                'Corentin Tolisso',
                'N\'Golo Kanté',
                'Adrien Rabiot',
                'Moussa Sissoko',
                'Kingsley Coman'
            ],
            attaquants: [
                'Antoine Griezman',
                'Olivier Giroud',
                'Kylian Mbappé',
                'Ousmane Dembélé',
                'Karim Benzema',
                'Wissam Ben Yedder',
                'Marcus Thuram'
            ]
        }
    },
    {
        id: 'HUN',
        name: 'Hongrie',
        flag: hongrie_flag,
        logo: hongrie_logo,
        groupe: 'Groupe F',
        trainer: 'Marco Rossi',
        players:{
            gardiens:[
                'Péter Gulacsi',
                'Dénes Dibusz',
                'Adam Bogdan'
            ],
            defenseurs:[
                'Adam Lang',
                'Akos Kecskés',
                'Attila Szalai',
                'Willi Orban',
                'Loïc Négo',
                'Gergo Lovrencsics',
                'Endre Botka',
                'Bendeguz Bolla'
            ],
            milieux: [
                'Adam Nagy',
                'Tamas Cseri',
                'Andras Schäfer',
                'Laszlo Kleinheisler',
                'Daniel Gazdag',
                'Roland Varga',
                'David Sigér',
                'Kevin Varga'
            ],
            attaquants: [
                'Adam Szalai',
                'Filip Holender',
                'Roland Sallai',
                'Nemanja Nikolic',
                'Szabolcs Schön',
                'Janos Hahn'
            ]
        }
    },
    {
        id: 'ITA',
        name: 'Italie',
        flag: italie_flag,
        logo: italie_logo,
        groupe: 'Groupe A',
        trainer: 'Roberto Mancini',
        players:{
            gardiens:[
                'Salvatore Sirigu',
                'Gianluigi Donnarumma',
                'Alex Meret'
            ],
            defenseurs:[
                'Giovanni Di Lorenzo',
                'Giorgio Chiellini',
                'Leonardo Spinazzola',
                'Emerson',
                'Francesco Acerbi',
                'Leonardo Bonucci',
                'Alessandro Bastoni',
                'Alessandro Florenzi',
                'Rafael Toloi'
            ],
            milieux: [
                'Manuel Locatelli',
                'Marco Verratti',
                'Lorenzo Pellegrini',
                'Jorginho',
                'Matteo Pessina',
                'Federico Chiesa',
                'Bryan Cristante',
                'Nicolo Barella',
                'Federico Bernardeschi'
            ],
            attaquants: [
                'Andrea Belotti',
                'Lorenzo Insigne',
                'Domenico Berardi',
                'Ciro Immobile',
                'Giacomo Raspadori'
            ]
        }
    },
    {
        id: 'FYR-N',
        name: 'Macédoine',
        flag: macedoine_flag,
        logo: macedoine_logo,
        groupe: 'Groupe C',
        trainer: 'Igor Angelovski',
        players:{
            gardiens:[
                'Stole Dimitrievski',
                'Risto Jankov',
                'Damjan Siskovski'
            ],
            defenseurs:[
                'Egzon Bejtulai',
                'Gjoko Zajkov',
                'Kire Ristevski',
                'Visar Musliu',
                'Egzijan Alioski',
                'Stefan Ristovski',
                'Darko Velkovski'
            ],
            milieux: [
                'Arijan Ademi',
                'Feran Hasani',
                'Tihomir Kostadinov',
                'Boban Nikolov',
                'Enis Bardi',
                'Stefan Spirovski',
                'Eljif Elmas',
                'Darko Churlinov',
                'Milan Ristovski'
            ],
            attaquants: [
                'Ivan Trickovski',
                'Aleksandar Trajkovski',
                'Goran Pandev',
                'Vlatko Stojanovski',
                'Krste Velkovski',
                'Marjan Radeski',
                'Daniel Avramovski'
            ]
        }
    },
    {
        id: 'PDG',
        name: 'Pays de Galles',
        flag: pays_de_galles_flag,
        logo: pays_de_galles_logo,
        groupe: 'Groupe A',
        trainer: 'Rob Page',
        players:{
            gardiens:[
                'Wayne Hennessey',
                'Danny Ward',
                'Adam Davies'
            ],
            defenseurs:[
                'Chris Gunter',
                'Neco Williams',
                'Ben Davies',
                'Tom Lockyer',
                'Joe Rodon',
                'Connor Roberts',
                'Ethan Ampadu',
                'Rhys Norrington-Davies',
                'Chris Mepham',
                'Ben Cabango'
            ],
            milieux: [
                'Joe Allen',
                'Harry Wilson',
                'Aaron Ramsey',
                'Joe Morrell',
                'Jonny Williams',
                'David Brooks',
                'Daniel James',
                'Dylan Levitt',
                'Rubin Colwill',
                'Matthew Smith'
            ],
            attaquants: [
                'Tyler Roberts',
                'Gareth Bale',
                'Kieffer Moore'
            ]
        }
    },
    {
        id: 'NLD',
        name: 'Pays-Bas',
        flag: pays_bas_flag,
        logo: pays_bas_logo,
        groupe: 'Groupe C',
        trainer: 'Franck de Boer',
        players:{
            gardiens:[
                'Maarten Stekelenburg',
                'Tim Krul',
                'Marco Bizot'
            ],
            defenseurs:[
                'Joël Veltman',
                'Matthijs de Ligt',
                'Nathan Aké',
                'Owen Wijndal',
                'Stefan de Vrij',
                'Patrick van Aanholt',
                'Daley Blind',
                'Denzel Dumfries'
            ],
            milieux: [
                'Georginio Wijnaldum',
                'Quincy Promes',
                'Davy Klaassen',
                'Marten de Roon',
                'Ryan Gravenberch',
                'Donny van de Beek',
                'Frenkie de Jong',
                'Teun Koopmeiners',
                'Jurriën Timber'
            ],
            attaquants: [
                'Steven Berghuis',
                'Luuk de Jong',
                'Memphis Depay',
                'Donyell Malen',
                'Wout Weghorst',
                'Cody Gakpo'
            ]
        }
    },
    {
        id: 'POL',
        name: 'Pologne',
        flag: pologne_flag,
        logo: pologne_logo,
        groupe: 'Groupe E',
        trainer: 'Paulo Sousa',
        players:{
            gardiens:[
                'Wojciech Szczesny',
                'Lukasz Skorupski',
                'Lukasz Fabianski'
            ],
            defenseurs:[
                'Kamil Piatkowski',
                'Tomasz Kedziora',
                'Jan Bednarek',
                'Maciej Rybus',
                'Kamil Glik',
                'Bartosz Bereszynski',
                'Michal Helik',
                'Tymoteusz Puchacz'
            ],
            milieux: [
                'Pawel Dawidowicz',
                'Kacper Kozlowski',
                'Karol Linetty',
                'Grzegorz Krychowiak',
                'Mateusz Klich',
                'Jakub Moder',
                'Przemyslaw Placheta',
                'Przemyslaw Frankowski',
                'Piotr Zielinski',
                'Kamil Jozwiak'
            ],
            attaquants: [
                'Arkadiusz Milik',
                'Robert Lewandowski',
                'Karol Swiderski',
                'Dawid Kownacki',
                'Jakub Swierczok'
            ]
        }
    },
    {
        id: 'PRT',
        name: 'Portugal',
        flag: portugal_flag,
        logo: portugal_logo,
        groupe: 'Groupe F',
        trainer: 'Fernando Santos',
        players:{
            gardiens:[
                'Rui Patricio',
                'Anthony Lopes',
                'Rui Silva'
            ],
            defenseurs:[
                'Nelson Semedo',
                'Pepe',
                'Ruben Dias',
                'Raphaël Guerreiro',
                'José Fonte',
                'Joao Cancelo',
                'Nuno Mendes'
            ],
            milieux: [
                'Joao Moutinho',
                'Bernardo Silva',
                'Bruno Fernandes',
                'Danilo',
                'William Carvalho',
                'Renato Sanches',
                'Gonçalo Guedes',
                'Ruben Neves',
                'Pedro Gonçalves',
                'Sergio Oliveira',
                'Joao Palhinha'
            ],
            attaquants: [
                'Cristiano Ronaldo',
                'André Silva',
                'Rafa Silva',
                'Diogo Jota',
                'Joao Félix'
            ]
        }
    },
    {
        id: 'CZE',
        name: 'Rep. Tcheque',
        flag: rep_tcheque_flag,
        logo: rep_tcheque_logo,
        groupe: 'Groupe D',
        trainer: 'Jaroslav Silhavy',
        players:{
            gardiens:[
                'Tomas Vaclik',
                'Ales Mandous',
                'Jiri Pavlenka'
            ],
            defenseurs:[
                'Pavel Kaderabek',
                'Ondrej Celustka',
                'Jakub Brabec',
                'Vladimir Coufal',
                'Tomas Kalas',
                'Tomas Holes',
                'David Zima',
                'Jan Boril',
                'Ales Mateju'
            ],
            milieux: [
                'Antonin Barak',
                'Vladimir Darida',
                'Lukas Masopust',
                'Petr Sevcik',
                'Jakub Jankto',
                'Tomas Soucek',
                'Alex Kral',
                'Jakub Pesek',
                'Michal Sadilek'
            ],
            attaquants: [
                'Patrik Schick',
                'Michael Krmencik',
                'Adam Hlozek',
                'Matej Vydra',
                'Tomas Pekhart'
            ]
        }
    },
    {
        id: 'RUS',
        name: 'Russie',
        flag: russie_flag,
        logo: russie_logo,
        groupe: 'Groupe B',
        trainer: 'Stanislav Cherchesov',
        players:{
            gardiens:[
                'Anton Shunin',
                'Yuri Dyupin',
                'Matvei Safonov'
            ],
            defenseurs:[
                'Mario Fernandes',
                'Igor Diveev',
                'Vyacheslav Karavaev',
                'Andrei Semenov',
                'Fedor Kudryashov',
                'Georgi Dzhikiya'
            ],
            milieux: [
                'Denis Cheryshev',
                'Magomed Ozdoev',
                'Dmitri Barinov',
                'Roman Zobnin',
                'Aleksandr Golovin',
                'Yuri Zhirkov',
                'Rifat Zhemaletdinov',
                'Daniil Fomin',
                'Daler Kuzyaev',
                'Andrei Mostovoy',
                'Maksim Mukhin'
            ],
            attaquants: [
                'Aleksandr Sobolev',
                'Anton Zabolotny',
                'Aleksei Miranchuk',
                'Aleksei Ionov',
                'Artem Dzyuba',
                'Denis Makarov'
            ]
        }
    },
    {
        id: 'SVK',
        name: 'Slovaquie',
        flag: slovaquie_flag,
        logo: slovaquie_logo,
        groupe: 'Groupe E',
        trainer: 'Štefan Tarkovič',
        players:{
            gardiens:[
                'Martin Dúbravka',
                'Dušan Kuciak',
                'Marek Rodák'
            ],
            defenseurs:[
                'Peter Pekarík',
                'Denis Vavro',
                'Martin Valjent',
                'Ľubomír Šatka',
                'Milan Škriniar',
                'Tomáš Hubočan',
                'Dávid Hancko',
                'Martin Koscelník'
            ],
            milieux: [
                'Ján Greguš',
                'Vladimír Weiss',
                'Ondrej Duda',
                'Tomáš Suslov',
                'László Bénes',
                'Patrik Hrošovský',
                'Marek Hamšík',
                'Lukáš Haraslín',
                'Juraj Kucka',
                'Stanislav Lobotka',
                'Jakub Hromada'
            ],
            attaquants: [
                'Róbert Boženík',
                'Róbert Mak',
                'Michal Ďuriš',
                'Ivan Schranz'
            ]
        }
    },
    {
        id: 'SWE',
        name: 'Suede',
        flag: suede_flag,
        logo: suede_logo,
        groupe: 'Groupe E',
        trainer: 'Jan Andersson',
        players:{
            gardiens:[
                'Robin Olsen',
                'Karl-Johan Johnsson',
                'Kristoffer Nordfeldt'
            ],
            defenseurs:[
                'Mikael Lustig',
                'Victor Lindelöf',
                'Andreas Granqvist',
                'Pierre Bengtsson',
                'Ludwig Augustinsson',
                'Filip Helander',
                'Emil Krafth',
                'Pontus Jansson',
                'Marcus Danielson'
            ],
            milieux: [
                'Sebastian Larsson',
                'Albin Ekdal',
                'Emil Forsberg',
                'Gustav Svensson',
                'Ken Sema',
                'Viktor Claesson',
                'Mattias Svanberg',
                'Kristoffer Olsson',
                'Dejan Kulusevski',
                'Robin Quaison',
                'Jens-Lys Cajuste'
            ],
            attaquants: [
                'Marcus Berg',
                'Alexander Isak',
                'Jordan Larsson'
            ]
        }
    },
    {
        id: 'CHE',
        name: 'Suisse',
        flag: suisse_flag,
        logo: suisse_logo,
        groupe: 'Groupe A',
        trainer: 'Vladimir Petković',
        players:{
            gardiens:[
                'Yann Sommer',
                'Yvon Mvogo',
                'Jonas Omlin'
            ],
            defenseurs:[
                'Kevin Mbabu',
                'Silvan Widmer',
                'Nico Elvedi',
                'Manuel Akanji',
                'Ricardo Rodríguez',
                'Loris Benito',
                'Fabian Schär',
                'Becir Omeragic',
                'Eray Cömert',
                'Jordan Lotomba'
            ],
            milieux: [
                'Denis Zakaria',
                'Remo Freuler',
                'Granit Xhaka',
                'Ruben Vargas',
                'Steven Zuber',
                'Djibril Sow',
                'Christian Fassnacht',
                'Edimilson Fernandes',
                'Xherdan Shaqiri'
            ],
            attaquants: [
                'Breel Embolo',
                'Haris Seferović',
                'Admir Mehmedi',
                'Mario Gavranović'
            ]
        }
    },
    {
        id: 'TUR',
        name: 'Turquie',
        flag: turquie_flag,
        logo: turquie_logo,
        groupe: 'Groupe A',
        trainer: 'Şenol Güneş',
        players:{
            gardiens:[
                'Mert Günok',
                'Altay Bayındır',
                'Uğurcan Çakır'
            ],
            defenseurs:[
                'Zeki Çelik',
                'Merih Demiral',
                'Çağlar Söyüncü',
                'Umut Meraş',
                'Ozan Kabak',
                'Rıdvan Yılmaz',
                'Kaan Ayhan',
                'Mert Müldür'
            ],
            milieux: [
                'Okay Yokuşlu',
                'Ozan Tufan',
                'Dorukhan Toköz',
                'Hakan Çalhanoğlu',
                'Taylan Antalyalı',
                'Orkun Kökçü',
                'Abdülkadir Ömür',
                'İrfan Can Kahveci',
                'M. Kerem Aktürkoğlu',
                'Halil Dervişoğlu'
            ],
            attaquants: [
                'Cengiz Ünder',
                'Kenan Karaman',
                'Yusuf Yazıcı',
                'Enes Ünal',
                'Burak Yılmaz'
            ]
        }
    },
    {
        id: 'UKR',
        name: 'Ukraine',
        flag: ukraine_flag,
        logo: ukraine_logo,
        groupe: 'Groupe C',
        trainer: 'Andriy Shevchenko',
        players:{
            gardiens:[
                'Georgiy Bushchan',
                'Andriy Pyatov',
                'Anatolii Trubin'
            ],
            defenseurs:[
                'Eduard Sobol',
                'Serhiy Kryvtsov',
                'Illia Zabarnyi',
                'Vitaliy Mykolenko',
                'Oleksandr Zinchenko',
                'Oleksandr Karavaev',
                'Mykola Matviyenko',
                'Oleksandr Tymchyk',
                'Denys Popov'
            ],
            milieux: [
                'Heorhii Sudakov',
                'Serhiy Sydorchuk',
                'Taras Stepanenko',
                'Ruslan Malinovskyi',
                'Mykola Shaparenko',
                'Marlos',
                'Yevhen Makarenko',
                'Viktor Tsygankov',
                'Roman Bezus'
            ],
            attaquants: [
                'Andriy Yarmolenko',
                'Roman Yaremchuk',
                'Artem Besedin',
                'Oleksandr Zubkov',
                'Artem Dovbyk'
            ]
        }
    }
]

export default teams