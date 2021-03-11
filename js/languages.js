const flags = document.querySelectorAll('.flag');
const flag_menu = document.querySelector('.lang-menu');
const aboutme = document.querySelector('#about');
const aboutme_desc = document.querySelector('.description')
const education = document.querySelector('#education');
const studies = document.querySelector('.studies');
const skills = document.querySelector('#skill');
const pongithub = document.querySelector('#github');
const navigation = document.querySelectorAll('.navigation_list ul li a')
const skill_section = document.querySelector('.Skills');
const lang_title = document.querySelector('#languages');
const lang_section = document.querySelector('.my-languages');
const footer = document.querySelector('footer');
const path_finding = document.querySelector('#path_finding');
const phrase_finder = document.querySelector('#phrase');
const conway_game = document.querySelector('#conway');

console.log(flag_menu);
console.log(flags);
console.log(aboutme);

flags.forEach(el => {
    el.addEventListener('click', () => {
        console.log("click "+el.getAttribute('language'));

        const attr = el.getAttribute('language');
        fillNavigation(attr);
        fillAbout(attr);
        fillEducation(attr);
        fillSkills(attr);
        fillLanguages(attr);
        fillProjects(attr);
        footer.textContent = data[attr].footer_text;
        
    });
});

var data = {
    "english": 
    {
      "title": "Paweł Borowiec - Portfolio",
      "navbar":{
        "aboutme": " About me",
        "education": "Education",
        "skills": "Skills",
        "languages": "Languages",
        "pongithub": "Projects on Github"
      },
      "aboutme": " About me",
      "aboutme_desc": "Student of 3rd year of \"Computer Science\" on PJATK, whose is now looking for the first job in IT. I learn Spring framework in my spare time and improve my english to get in close future certificate ",
      "education": "Education",
      "edu_desc":{
        "StudiesName": "Polish-Japanese Academy of information technology",
        "StudiesYears": "2019 - 2022",
        "StudiesSpecialization": "Specialization - Programming of business applications"
      },
      "skills":{
        "title": "Skills",
        "techstack": "Current Techstack",
        "programs": "Programs that I know how to use :",
        "gimp_desc": "Image editing and creation of graphics for private usage and occasionally for commercial usage of family members",
        "vsc_desc": "Commonly used to work with several cases",
        "idea_desc": "My main IDE since beggining of studies",
        "post_desc": "Sending API request to test REST responses",
        "docker_desc": "Creating images of databases" 
    },
        "languages":{
          "title": "Languages",
          "pol_name": "Polish",
          "eng_name": "English",
          "pol_desc": "My native language",
          "eng_desc": "At B2 level. Sufficient to read and write documentation"  
        },
        "pongithub":{
            "title": "Projekty na Githubie",
            "path_title": "Implementation of Path Finding Algortihm",
            "path_desc": "Made for studies as a part of subject \"Algorithms and Data Structures\". After I had bought book about JavaFX Framework, I made for this programme simple GUI to make it more complex",
            "phrase_title": "Phrase Finder",
            "phrase_desc": "As name suggest this programme find every appearance of specified word i catalog of files. I wrote this programme to make finding certain variables or words in numerous files easier and faster. Of cource I could find every appearance in other way but i wanted to make something usefull in java for myself",
            "conway_title": "Conway simulator",
            "conway_desc": "Implementation of popular game \"Game of life\" with rules based of these created by John Conway. In this program you can define \"alive\" cells by mouse and later on by button create next \"generation\" of living cells. Program was originally created as a part of subject \"Fundamentals of computer simulations\" as simple example of one of the first topics during semester."
        },
        "footer_text": "2021 made by Paweł Borowiec"
    },
    
    "polish":
    {
      "title": "Witaj świecie",
      "navbar":{
        "aboutme": "O mnie",
        "education": "Edukacja",
        "skills": "Umiejętności",
        "languages": "Języki",
        "pongithub": "Projekty na Githubie"
      },
      "aboutme": "O mnie",
      "aboutme_desc": "Student trzeciego roku informatyki na Polsko-Japońskiej Akademii Technik Komputerowych, szukający obecnie swojej pierszej pracy w branży IT bądź miejsca do odbycia praktyk. W wolnym czasie uczę się na własną rekę frameworka Spring oraz doszkalam swój angielski aby w najbliższej przyszłośći uzyskać certyfikat.",
      "education": "Edukacja",
      "edu_desc":{
        "StudiesName": "Polsko-Japońska Akademia Technik Komputerowych",
        "StudiesYears": "2019 - 2022",
        "StudiesSpecialization": "Specjalizacja: Programowanie aplikacji biznesowych"
      },
      "skills":{
        "title": "Umiejętności",
        "techstack": "Obecny Techstack",
        "programs": "Programy, którymi się biegle posługuje",
        "gimp_desc": "Edytowanie zdjęć i tworzenie grafik głównie na użytek własny",
        "vsc_desc": "Niemal codziennie używany z racji na szeroką paletę użytecznych rozszerzeń i funkcjonalności",
        "idea_desc": "Główne narzędzie do pracy w Javie i jej Frameworkach",
        "post_desc": "Tworzenie requestów do testowania API",
        "docker_desc": "Tworzenie kontenerówna potrzeby pracy z bazą danych" 
      },
      "languages":{
        "title": "Języki",
        "pol_name": "Polski",
        "eng_name": "Angielski",
        "pol_desc": "Język rodzimy",
        "eng_desc": "Na poziomie B2. Wystarczający do czytania i pisania dokumentacji"  
      },
      "pongithub":{
          "title": "Projekty na Githubie",
          "path_title": "Szukanie ścieżki metodą A-Star",
          "path_desc": "Rozwinięcie szkolnego zadania z algorytmów polegającego pierwotnie na zaimplementowaniu dowolnego algorytmu do wyszukiwania najkrótszej ścieżki między punktami. Poźniej po zakupieniu książki do JavaFX postanowiłem dodać do niego pełnoprawne GUI oraz odświeżyć kod, ponieważ ten zawierał wiele niechlujnych fragmentów",
          "phrase_title": "Phrase Finder",
          "phrase_desc": "Program zrobiony do ułatwienia sobie przeszukiwania dużych katalogów plików w poszukiwaniy wystąpień poszczególnych wyrazów. Pierwotnie używany podczas modowania gier w celu wyszkuwania każdego użycia jakiejś zmiennej. Program zrealizowany w jedno popołudnie i czasami przeze używany",
          "conway_title": "Conway - Gra w życie",
          "conway_desc": "Implementacja popularnego algorytmu opisującego zasady gry w życie stworzone przez Johna Conwaya. Każda komórka w tej grze może mieć status \"żywej\" bąź \"martwej\". Komórka staje się żywa gdy ma dwóch bądź trzech żywych sąsiadów a umiera gdy posiada inną ilość sąsiadów. Gui wykonane w JavaFX."
      },
      "footer_text": "2021 wykonane przez Pawła Borowca"
     }
  }

  function fillNavigation(attr){
    navigation[0].textContent = data[attr].navbar.aboutme;
    navigation[1].textContent = data[attr].navbar.education;
    navigation[2].textContent = data[attr].navbar.skills;
    navigation[3].textContent = data[attr].navbar.languages;
    navigation[4].textContent = data[attr].navbar.pongithub;
  }

  function fillAbout(attr){
    aboutme.textContent = data[attr].aboutme;
    aboutme_desc.textContent = data[attr].aboutme_desc;
  }

  function fillEducation(attr){
    education.textContent = data[attr].education;
    studies.childNodes[1].textContent = data[attr].edu_desc.StudiesName;
    studies.childNodes[3].textContent = data[attr].edu_desc.StudiesYears;
    studies.childNodes[5].textContent = data[attr].edu_desc.StudiesSpecialization;
  }

  function fillSkills(attr){
    skills.textContent = data[attr].skills.title;
    skill_section.childNodes[1].childNodes[1].textContent = data[attr].skills.techstack;
    skill_section.childNodes[3].childNodes[1].textContent = data[attr].skills.programs;
    skill_section.childNodes[3].childNodes[3].childNodes[1].childNodes[3].textContent = data[attr].skills.gimp_desc;
    skill_section.childNodes[3].childNodes[3].childNodes[3].childNodes[3].textContent = data[attr].skills.vsc_desc;
    skill_section.childNodes[3].childNodes[3].childNodes[5].childNodes[3].textContent = data[attr].skills.idea_desc;
    skill_section.childNodes[3].childNodes[3].childNodes[7].childNodes[3].textContent = data[attr].skills.post_desc;
    skill_section.childNodes[3].childNodes[3].childNodes[9].childNodes[3].textContent = data[attr].skills.docker_desc;
  }

  function fillLanguages(attr){
    lang_title.textContent = data[attr].languages.title;
    lang_section.childNodes[1].childNodes[1].childNodes[3].textContent = data[attr].languages.pol_name;
    lang_section.childNodes[1].childNodes[3].textContent = data[attr].languages.pol_desc;
    lang_section.childNodes[3].childNodes[1].childNodes[3].textContent = data[attr].languages.eng_name;
    lang_section.childNodes[3].childNodes[3].textContent = data[attr].languages.eng_desc;
  }

  function fillProjects(attr){
    pongithub.textContent = data[attr].pongithub.title;
    path_finding.childNodes[1].textContent = data[attr].pongithub.path_title;
    path_finding.childNodes[5].textContent = data[attr].pongithub.path_desc;
    phrase_finder.childNodes[1].textContent = data[attr].pongithub.phrase_title;
    phrase_finder.childNodes[5].textContent = data[attr].pongithub.phrase_desc;
    conway_game.childNodes[1].textContent = data[attr].pongithub.conway_title;
    conway_game.childNodes[5].textContent = data[attr].pongithub.conway_desc;
  }