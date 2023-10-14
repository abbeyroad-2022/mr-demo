$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

var isMyMap = ['mordernCasual','exploreTheWorld','theGentleman','everydayClassic'];

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    if($.urlParam('section') == null) {

        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp=AdobeAn.getComposition("F0EB23B792052446A3C3A37CF0968462");
        var lib=comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
        loader.addEventListener("complete", function(evt){
            handleComplete(evt,comp)
        });
        var lib=comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);

    } else {

        $('#indicators').animate({

            opacity: 0

        }, 350, function(){

            $.fn.fullpage.moveTo(isMyMap[ parseInt($.urlParam('section')) - 1 ], 0);
            $('#indicators').remove();

        });

    }
}
function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.intro();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();

    $('#myContainer').css({
        'top' : 280
    })

    setTimeout(function(){

        $('#indicators').animate({
            top: -$(window).height()
        },650, function(){

            $('#indicators').animate({
                opacity: 0.8
            },1000, function(){
                $('#indicators').remove();
            });

            if($.urlParam('section') == null) {

                $.fn.fullpage.moveTo(isMyMap[0], 0);

            } else {

                $.fn.fullpage.moveTo(isMyMap[ parseInt($.urlParam('section')) - 1 ], 0);

            }

        });

        $('#myContainer').animate({
            'top' : 0
        }, 600)

    },2000)

}

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
        {name:"intro_atlas_", frames: [[812,798,198,274],[346,0,322,536],[670,0,226,414],[556,798,254,224],[670,416,228,380],[346,538,208,328],[0,539,226,272],[0,0,344,537],[0,868,359,144],[541,1024,198,136],[0,1014,280,136],[282,1014,257,144]]}
];


// symbols:



(lib._1 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.kol = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ll = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ma = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.on = function() {
    this.spriteSheet = ss["intro_atlas_"];
    this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.txt_ON = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib.on();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,144);


(lib.txt_MA = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib.ma();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,136);


(lib.txt_LL = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib.ll();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,136);


(lib.txt_KOR = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib.kol();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.img8 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._7();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,272);


(lib.img7 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._5();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,380);


(lib.img6 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._8();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,537);


(lib.img5 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._2();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322,536);


(lib.img4 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._4();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254,224);


(lib.img3 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._3();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,414);


(lib.img2 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._6();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,328);


(lib.img1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // 레이어_1
    this.instance = new lib._1();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,274);


// stage content:
(lib.intro = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // timeline functions:
    this.frame_47 = function() {
        this.stop()
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

    // on.png
    this.instance = new lib.txt_ON("synched",0);
    this.instance.parent = this;
    this.instance.setTransform(422.6,543.8,1,1,0,0,0,128.5,72);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({y:553.8,alpha:1},19).wait(1));

    // ma.png
    this.instance_1 = new lib.txt_MA("synched",0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(769,487,1,1,0,0,0,140,68);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({y:481,alpha:1},19).wait(1));

    // ll.png
    this.instance_2 = new lib.txt_LL("synched",0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(1039,345,1,1,0,0,0,99,68);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:1045,alpha:1},19).wait(5));

    // kol.png
    this.instance_3 = new lib.txt_KOR("synched",0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(214.5,394,1,1,0,0,0,179.5,72);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({x:208.5,alpha:1},19).wait(5));

    // 7
    this.instance_4 = new lib.img7("synched",0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(106,652,1,1,0,0,0,114,190);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({x:114,alpha:1},19).wait(9));

    // 6
    this.instance_5 = new lib.img6("synched",0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(1036,681.5,1,1,0,0,0,172,268.5);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({x:1028,alpha:1},19).wait(9));

    // 5
    this.instance_6 = new lib.img5("synched",0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(439,260,1,1,0,0,0,161,268);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:268,alpha:1},19).wait(21));

    // 4
    this.instance_7 = new lib.img4("synched",0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(1081,223,1,1,0,0,0,127,112);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({x:1073,alpha:1},19).wait(21));

    // 3
    this.instance_8 = new lib.img3("synched",0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(735,207,1,1,0,0,0,113,207);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({x:743,alpha:1},19).wait(25));

    // 2
    this.instance_9 = new lib.img2("synched",0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(425,794,1,1,0,0,0,104,164);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({y:786,alpha:1},19).wait(25));

    // 8
    this.instance_10 = new lib.img8("synched",0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(713,734,1,1,0,0,0,113,136);
    this.instance_10.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:726,alpha:1},19).wait(29));

    // 1
    this.instance_11 = new lib.img1("synched",0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(129,241,1,1,0,0,0,99,137);
    this.instance_11.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:249,alpha:1},19).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(630,579,796,766);
// library properties:
lib.properties = {
    id: 'F0EB23B792052446A3C3A37CF0968462',
    width: 1200,
    height: 950,
    fps: 48,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: [
        {src:"https://kopimages.kolon.com/cms/event/upload/a12d793c-95ca-4861-8e31-2a3a8ebc7964/intro_atlas_.png?1508380419626", id:"intro_atlas_"}
    ],
    preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
    an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if(an.bootcompsLoaded.length > 0) {
        for(var i=0; i<an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
        }
    }
};

an.compositions = an.compositions || {};
an.compositions['F0EB23B792052446A3C3A37CF0968462'] = {
    getStage: function() { return exportRoot.getStage(); },
    getLibrary: function() { return lib; },
    getSpriteSheet: function() { return ss; },
    getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for(var j=0; j<an.bootstrapListeners.length; j++) {
        an.bootstrapListeners[j](id);
    }
}

an.getComposition = function(id) {
    return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;