require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const saltRounds=10;


const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://abhi:thegameison@cluster0.njzji.mongodb.net/userDB",{useNewUrlParser:true},{useUnifiedTopology: true});
const userSchema= new mongoose.Schema({

  password:String,
  email:String
});
const User=new mongoose.model("User",userSchema);

app.get("/",function(req,res){
  res.render("home");
});
app.get("/explore",function(req,res){
  res.render("explore");
});
app.get("/milkyway",function(req,res){
  res.render("milkyway");
});
app.get("/sun",function(req,res){
  res.render("sun");
});
app.get("/mercury",function(req,res){
  res.render("mercury");
});
app.get("/venus",function(req,res){
  res.render("venus");
});
app.get("/earth",function(req,res){
  res.render("earth");
});
app.get("/mars",function(req,res){
  res.render("mars");
});
app.get("/jupiter",function(req,res){
  res.render("jupiter");
});
app.get("/saturn",function(req,res){
  res.render("saturn");
});
app.get("/neptune",function(req,res){
  res.render("neptune");
});
app.get("/uranus",function(req,res){
  res.render("uranus");
});
app.get("/pluto",function(req,res){
  res.render("pluto");
});
app.get("/eris",function(req,res){
  res.render("eris");
});
app.get("/ceres",function(req,res){
  res.render("ceres");
});
app.get("/sedna",function(req,res){
  res.render("sedna");
});
app.get("/orcus",function(req,res){
  res.render("orcus");
});
app.get("/haumea",function(req,res){
  res.render("haumea");
});
app.get("/asteroidbelt",function(req,res){
  res.render("asteroidbelt");
});
app.get("/makemake",function(req,res){
  res.render("makemake");
});
app.get("/quaoar",function(req,res){
  res.render("quaoar");
});
app.get("/moon",function(req,res){
  res.render("moon");
});
app.get("/phobos",function(req,res){
  res.render("phobos");
});
app.get("/io",function(req,res){
  res.render("io");
});
app.get("/europa",function(req,res){
  res.render("europa");
});
app.get("/ganymede",function(req,res){
  res.render("ganymede");
});
app.get("/callisto",function(req,res){
  res.render("callisto");
});
app.get("/encheladus",function(req,res){
  res.render("encheladus");
});
app.get("/titan",function(req,res){
  res.render("titan");
});
app.get("/atlas",function(req,res){
  res.render("atlas");
});
app.get("/helene",function(req,res){
  res.render("helene");
});
app.get("/ariel",function(req,res){
  res.render("ariel");
});
app.get("/oberon",function(req,res){
  res.render("oberon");
});
app.get("/titania",function(req,res){
  res.render("titania");
});
app.get("/umbriel",function(req,res){
  res.render("umbriel");
});
app.get("/kuiperbelt",function(req,res){
  res.render("kuiperbelt");
});
app.get("/oortcloud",function(req,res){
  res.render("oortcloud");
});
app.get("/asteroids",function(req,res){
  res.render("asteroids");
});
app.get("/meteorites",function(req,res){
  res.render("meteorites");
});
app.get("/comets",function(req,res){
  res.render("comets");
});
app.get("/Hartley2",function(req,res){
  res.render("Hartley 2");
});
app.get("/swift-tuttle",function(req,res){
  res.render("swift-tuttle");
});
app.get("/borrelly",function(req,res){
  res.render("borrelly");
});
app.get("/halley",function(req,res){
  res.render("halley");
});
app.get("/giacobini",function(req,res){
  res.render("giacobini");
});
app.get("/borisov",function(req,res){
  res.render("borisov");
});
app.get("/encke",function(req,res){
  res.render("encke");
});
app.get("/wild2",function(req,res){
  res.render("wild 2");
});
app.get("/tempel-tuttle",function(req,res){
  res.render("tempel 1-tuttle");
});
app.get("/ison",function(req,res){
  res.render("ison");
});
app.get("/oumuamua",function(req,res){
  res.render("oumuamua");
});
app.get("/shoemaker-levy",function(req,res){
  res.render("shoemaker-levy 9");
});
app.get("/bennu",function(req,res){
  res.render("101955 bennu");
});
app.get("/chariklo",function(req,res){
  res.render("10199 chariklo");
});
app.get("/psyche",function(req,res){
  res.render("16 psyche");
});
app.get("/ida",function(req,res){
  res.render("243 ida");
});
app.get("/itokawa",function(req,res){
  res.render("25143 itokawa");
});
app.get("/mathilde",function(req,res){
  res.render("253 mathilde");
});
app.get("/eros",function(req,res){
  res.render("433 eros");
});
app.get("/vesta",function(req,res){
  res.render("4 vesta");
});
app.get("/quadrantids",function(req,res){
  res.render("quadrantids");
});
app.get("/lyrids",function(req,res){
  res.render("lyrids");
});
app.get("/etaaquarids",function(req,res){
  res.render("eta aquarids");
});
app.get("/deltaaquarids",function(req,res){
  res.render("delta aquarids");
});
app.get("/perseids",function(req,res){
  res.render("perseids");
});
app.get("/orionids",function(req,res){
  res.render("orionids");
});
app.get("/leonids",function(req,res){
  res.render("leonids");
});
app.get("/geminids",function(req,res){
  res.render("geminids");
});
app.get("/constellation",function(req,res){
  res.render("constellation");
});
app.get("/aries",function(req,res){
  res.render("aries");
});
app.get("/taurus",function(req,res){
  res.render("taurus");
});
app.get("/gemini",function(req,res){
  res.render("gemini");
});
app.get("/cancer",function(req,res){
  res.render("cancer");
});
app.get("/leo",function(req,res){
  res.render("leo");
});
app.get("/virgo",function(req,res){
  res.render("virgo");
});
app.get("/libra",function(req,res){
  res.render("libra");
});
app.get("/Scorpio",function(req,res){
  res.render("scorpio");
});
app.get("/Sagittarius",function(req,res){
  res.render("sagittarius");
});
app.get("/capricorn",function(req,res){
  res.render("capricorn");
});
app.get("/aquarius",function(req,res){
  res.render("aquarius");
});
app.get("/pisces",function(req,res){
  res.render("pisces");
});
app.get("/galaxies",function(req,res){
  res.render("galaxies");
});
app.get("/nebula",function(req,res){
  res.render("nebula");
});
app.get("/orion",function(req,res){
  res.render("orion");
});
app.get("/horsehead",function(req,res){
  res.render("horsehead");
});
app.get("/crab",function(req,res){
  res.render("crab");
});
app.get("/eagle",function(req,res){
  res.render("eagle");
});
app.get("/eskimo",function(req,res){
  res.render("eskimo");
});
app.get("/helix",function(req,res){
  res.render("helix");
});
app.get("/ring",function(req,res){
  res.render("ring");
});
app.get("/lagoon",function(req,res){
  res.render("lagoon");
});
app.get("/carina",function(req,res){
  res.render("carina");
});
app.get("/catseye",function(req,res){
  res.render("catseye");
});
app.get("/tarantula",function(req,res){
  res.render("Tarantula");
});
app.get("/dumbbell",function(req,res){
  res.render("dumbbell");
});
app.get("/ngc5866",function(req,res){
  res.render("ngc 5866");
});
app.get("/owl",function(req,res){
  res.render("owl");
});
app.get("/m29",function(req,res){
  res.render("m29");
});
app.get("/omega",function(req,res){
  res.render("omega");
});
app.get("/saturnnebula",function(req,res){
  res.render("saturnnebula");
});
app.get("/Boomerang",function(req,res){
  res.render("Boomerang");
});
app.get("/eggnebula",function(req,res){
  res.render("eggnebula");
});
app.get("/ghostnebula",function(req,res){
  res.render("ghostnebula");
});
app.get("/andromeda",function(req,res){
  res.render("andromeda");
});
app.get("/antennae",function(req,res){
  res.render("antennae");
});
app.get("/backward",function(req,res){
  res.render("backward");
});
app.get("/bearpaw",function(req,res){
  res.render("bearpaw");
});
app.get("/blackeye",function(req,res){
  res.render("blackeye");
});
app.get("/butterfly",function(req,res){
  res.render("butterfly");
});
app.get("/carinadwarf",function(req,res){
  res.render("carinadwarf");
});
app.get("/cartwheel",function(req,res){
  res.render("cartwheel");
});
app.get("/cantaurusA",function(req,res){
  res.render("cantaurusA");
});
app.get("/cetusA",function(req,res){
  res.render("cetusA");
});
app.get("/canismajor",function(req,res){
  res.render("canismajor");
});
app.get("/largeMagellanic",function(req,res){
  res.render("largeMagellanic");
});
app.get("/messier87",function(req,res){
  res.render("messier87");
});
app.get("/messier82",function(req,res){
  res.render("messier82");
});
app.get("/ngc1300",function(req,res){
  res.render("ngc1300");
});
app.get("/pinwheel",function(req,res){
  res.render("pinwheel");
});
app.get("/scupltor",function(req,res){
  res.render("scupltor");
});
app.get("/sombrero",function(req,res){
  res.render("sombrero");
});
app.get("/smallMagellanic",function(req,res){
  res.render("smallMagellanic");
});
app.get("/triangulum",function(req,res){
  res.render("triangulum");
});
app.get("/ursaminor",function(req,res){
  res.render("ursaminor");
});
app.get("/whale",function(req,res){
  res.render("whale");
});
app.get("/whirlpool",function(req,res){
  res.render("whirlpool");
});
app.get("/blackhole",function(req,res){
  res.render("blackhole");
});

app.get("/darkmatter",function(req,res){
  res.render("darkmatter");
});
app.get("/godparticle",function(req,res){
  res.render("godparticle");
});
app.get("/news",function(req,res){
  res.render("news");
});
app.get("/newsmoon",function(req,res){
  res.render("newsmoon");
});
app.get("/astro",function(req,res){
  res.render("astro");
});
app.get("/blacknews",function(req,res){
  res.render("blacknews");
});
app.get("/blogs",function(req,res){
  res.render("blogs");
});
app.get("/header1",function(req,res){
  res.render("header1");
});
app.get("/loggin",function(req,res){
  res.render("loggin");
});
app.get("/telescope",function(req,res){
  res.render("telescope");
});
app.get("/satellite",function(req,res){
  res.render("satellite");
});
app.get("/spaceflight",function(req,res){
  res.render("spaceflight");
});
app.get("/game",function(req,res){
  res.render("drum");
});
app.get("/signup",function(req,res){
  res.render("signup");
});
app.get("/shop",function(req,res){
  res.render("shop");
});
app.get("/newsletter",function(req,res){
  res.render("newsletter");
});
app.get("/welcome",function(req,res){
  res.render("welcome");
});


app.post("/signup",function(req,res){
  bcrypt.hash(req.body.password,saltRounds,function(err,hash){
    const newUser=new User({
      email:req.body.username,
      password:hash
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.render("welcome");
      }
  });
  });
});
app.post("/loggin",function(req,res){
  const username=req.body.name;
  const password=req.body.pass;
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        bcrypt.compare(password,foundUser.pass,function(err,res){
          if(err){
            res.render("news");
          }else{
            if(res===true){
            res.render("blogs");}
            else{
              res.render("news");
            }
          }

        });
        }
      }
  });
});
app.listen(process.env.PORT || 3000,function(){
  console.log("running");
});
