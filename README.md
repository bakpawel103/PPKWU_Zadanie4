# PPKWU_Zadanie4

It's a Nodejs REST Api project that will list all available companies with name provided in body and will generate vcf file.

## Starting server tutorial:

To start server, just go to project directory with terminal and enter command:  
> npm run dev

## Endpoints:

- `GET /getCompanies` <- get list of companies with name provided in body  
  @body (:string)  
  @return list of companies with name provided in body

  **Example body:**
  ```javascript
  {
      "name": "hydraulik"
  }
  ```

  **Example result:**
  ```javascript
  [
      {
          "name": "Fhu Nypel Usługi Hydrauliczne Łukasz Szydliński",
          "address": "ul. Cieszkowskiego 4/27, 41-303 Dąbrowa Górnicza",
          "phoneNumber": "698 095 573"
      },
      {
          "name": "Hydraulika Montaż Instalacji Sanitarnych i Grzewczych Robert Rosłoniec",
          "address": "ul. Wierzbowa 12, 05-503 Robercin",
          "phoneNumber": "501 083 795"
      },
      {
          "name": "Kamil Przęczek",
          "address": "32-020 Grabówki 12",
          "phoneNumber": "516 765 572"
      },
      {
          "name": "Adam Kołota Udrażnianie rur",
          "address": "ul. Zaciszna 30A, 05-230 Kobyłka",
          "phoneNumber": "781 266 854"
      },
      {
          "name": "Hydro Seb FU Sebastian Jeziorowski",
          "address": "ul. Mirowska  42-202 Częstochowa",
          "phoneNumber": "502 220 475"
      },
      {
          "name": "Kaz-Bud Bramy, ogrodzenia, usługi hydrauliczne Kazimierz Kuzioła",
          "address": "24-220 Strzeszkowice Małe",
          "phoneNumber": "669 591 968"
      },
      {
          "name": "Łukasz Noga Prima Sort",
          "address": "al. Dębowa 21, 32-005 Niepołomice",
          "phoneNumber": "536 792 675"
      },
      {
          "name": "HDK Hydraulika Krzysztof Danielewicz",
          "address": "ul. Borsucza 3a, 05-410 Józefów",
          "phoneNumber": "791 851 671"
      },
      {
          "name": "Hydrowat. PUH. Instalacje hydrauliczne i klimatyzacja. Kaczmarczyk W.",
          "address": "ul. Cyganerii 13/31, 43-100 Tychy",
          "phoneNumber": "501 694 091"
      },
      {
          "name": "Hydro Seb FU Sebastian Jeziorowski",
          "address": "ul. Śmiłowskiego 8/10, 41-100 Siemianowice Śląskie",
          "phoneNumber": "502 220 475"
      },
      {
          "name": "Gamar Marek Garliński",
          "address": "ul. Daszyńskiego 10 F/3, 56-400 Oleśnica",
          "phoneNumber": "601 746 608"
      },
      {
          "name": "Jacoterm Instalacje wod-kan. gazowe Jacek Stępnik",
          "address": "ul. Górna 20/116, 25-415 Kielce",
          "phoneNumber": "509 073 924"
      },
      {
          "name": "Instalacje Mw Wyciek Zalanie Osuszanie",
          "address": "ul. Pełczyńska 119, 51-180 Wrocław",
          "phoneNumber": "516 706 260"
      },
      {
          "name": "Łukasz Radochoński Hydroanet",
          "address": "37-722 Wyszatyce 231",
          "phoneNumber": "695 155 269"
      },
      {
          "name": "Michsan Zakład Instalacyjno-Budowlany",
          "address": "ul. Warmińska 7, 42-202 Częstochowa",
          "phoneNumber": "(34) 362 89 45"
      },
      {
          "name": "Instal Term Piotr Rachwalik",
          "address": "ul. Szczecińska 52,  Świdwin",
          "phoneNumber": "798 574 244"
      },
      {
          "name": "Technika Grzewcza I Sanitarna Instal Paweł Szeląg",
          "address": "24-120 Zbędowice 13",
          "phoneNumber": "515 079 481"
      },
      {
          "name": "Technika Grzewcza I Sanitarna Instal Paweł Szeląg",
          "address": "24-120 Zbędowice 13",
          "phoneNumber": "515 079 481"
      },
      {
          "name": "M-Instalacje Michał Filipkiewicz",
          "address": "ul. Słomiana 4/44, 30-316 Kraków",
          "phoneNumber": "508 455 843"
      },
      {
          "name": "Ilmar Technika Grzewcza Jerzy Ilków",
          "address": "pl. Stanisława Staszica 15/8, 50-238 Wrocław",
          "phoneNumber": "601 787 666"
      },
      {
          "name": "Hydro Instal Przyłącza Wod-Kan",
          "address": "ul. Chorzowska 3, 26-603 Radom",
          "phoneNumber": "728 916 865"
      },
      {
          "name": "H&H INSTALACJE",
          "address": "84-210 Łętowo 3 lok. 4",
          "phoneNumber": "512 139 545"
      },
      {
          "name": "Hydro Seb FU Sebastian Jeziorowski",
          "address": "42-244 Srocko 64",
          "phoneNumber": "502 220 475"
      },
      {
          "name": "Grześpol PHU Grzegorz Polasiński",
          "address": "ul. Lipowa 82/20, 90-568 Łódź",
          "phoneNumber": "606 986 460"
      },
      {
          "name": "FHU Instal Serwis Sławomir Zdzikot",
          "address": "Parkowa 29/9, 71-634 Szczecin",
          "phoneNumber": "518 678 009"
      }
  ]
  ```
