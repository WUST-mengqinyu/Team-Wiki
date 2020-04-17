/*!
 * Lunr languages, `Dutch` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */
!function(r,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()(r.lunr)}(this,function(){return function(r){if(void 0===r)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===r.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var v,q,e;r.nl=function(){this.pipeline.reset(),this.pipeline.add(r.nl.trimmer,r.nl.stopWordFilter,r.nl.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(r.nl.stemmer))},r.nl.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",r.nl.trimmer=r.trimmerSupport.generateTrimmer(r.nl.wordCharacters),r.Pipeline.registerFunction(r.nl.trimmer,"trimmer-nl"),r.nl.stemmer=(v=r.stemmerSupport.Among,q=r.stemmerSupport.SnowballProgram,e=new function(){var e,i,u,o=[new v("",-1,6),new v("á",0,1),new v("ä",0,1),new v("é",0,2),new v("ë",0,2),new v("í",0,3),new v("ï",0,3),new v("ó",0,4),new v("ö",0,4),new v("ú",0,5),new v("ü",0,5)],n=[new v("",-1,3),new v("I",0,2),new v("Y",0,1)],t=[new v("dd",-1,-1),new v("kk",-1,-1),new v("tt",-1,-1)],c=[new v("ene",-1,2),new v("se",-1,3),new v("en",-1,2),new v("heden",2,1),new v("s",-1,3)],a=[new v("end",-1,1),new v("ig",-1,2),new v("ing",-1,1),new v("lijk",-1,3),new v("baar",-1,4),new v("bar",-1,5)],l=[new v("aa",-1,-1),new v("ee",-1,-1),new v("oo",-1,-1),new v("uu",-1,-1)],m=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],d=[1,0,0,17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],f=[17,67,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],_=new q;function s(r){return(_.cursor=r)>=_.limit||(_.cursor++,!1)}function w(){for(;!_.in_grouping(m,97,232);){if(_.cursor>=_.limit)return!0;_.cursor++}for(;!_.out_grouping(m,97,232);){if(_.cursor>=_.limit)return!0;_.cursor++}return!1}function b(){return i<=_.cursor}function p(){return e<=_.cursor}function g(){var r=_.limit-_.cursor;_.find_among_b(t,3)&&(_.cursor=_.limit-r,_.ket=_.cursor,_.cursor>_.limit_backward&&(_.cursor--,_.bra=_.cursor,_.slice_del()))}function h(){var r;u=!1,_.ket=_.cursor,_.eq_s_b(1,"e")&&(_.bra=_.cursor,b()&&(r=_.limit-_.cursor,_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-r,_.slice_del(),u=!0,g())))}function k(){var r;b()&&(r=_.limit-_.cursor,_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-r,_.eq_s_b(3,"gem")||(_.cursor=_.limit-r,_.slice_del(),g())))}this.setCurrent=function(r){_.setCurrent(r)},this.getCurrent=function(){return _.getCurrent()},this.stem=function(){var r=_.cursor;return function(){for(var r,e,i,n=_.cursor;;){if(_.bra=_.cursor,r=_.find_among(o,11))switch(_.ket=_.cursor,r){case 1:_.slice_from("a");continue;case 2:_.slice_from("e");continue;case 3:_.slice_from("i");continue;case 4:_.slice_from("o");continue;case 5:_.slice_from("u");continue;case 6:if(_.cursor>=_.limit)break;_.cursor++;continue}break}for(_.cursor=n,_.bra=n,_.eq_s(1,"y")?(_.ket=_.cursor,_.slice_from("Y")):_.cursor=n;;)if(e=_.cursor,_.in_grouping(m,97,232)){if(i=_.cursor,_.bra=i,_.eq_s(1,"i"))_.ket=_.cursor,_.in_grouping(m,97,232)&&(_.slice_from("I"),_.cursor=e);else if(_.cursor=i,_.eq_s(1,"y"))_.ket=_.cursor,_.slice_from("Y"),_.cursor=e;else if(s(e))break}else if(s(e))break}(),_.cursor=r,i=_.limit,e=i,w()||((i=_.cursor)<3&&(i=3),w()||(e=_.cursor)),_.limit_backward=r,_.cursor=_.limit,function(){var r,e,i,n,o,t,s=_.limit-_.cursor;if(_.ket=_.cursor,r=_.find_among_b(c,5))switch(_.bra=_.cursor,r){case 1:b()&&_.slice_from("heid");break;case 2:k();break;case 3:b()&&_.out_grouping_b(f,97,232)&&_.slice_del()}if(_.cursor=_.limit-s,h(),_.cursor=_.limit-s,_.ket=_.cursor,_.eq_s_b(4,"heid")&&(_.bra=_.cursor,p()&&(e=_.limit-_.cursor,_.eq_s_b(1,"c")||(_.cursor=_.limit-e,_.slice_del(),_.ket=_.cursor,_.eq_s_b(2,"en")&&(_.bra=_.cursor,k())))),_.cursor=_.limit-s,_.ket=_.cursor,r=_.find_among_b(a,6))switch(_.bra=_.cursor,r){case 1:if(p()){if(_.slice_del(),i=_.limit-_.cursor,_.ket=_.cursor,_.eq_s_b(2,"ig")&&(_.bra=_.cursor,p()&&(n=_.limit-_.cursor,!_.eq_s_b(1,"e")))){_.cursor=_.limit-n,_.slice_del();break}_.cursor=_.limit-i,g()}break;case 2:p()&&(o=_.limit-_.cursor,_.eq_s_b(1,"e")||(_.cursor=_.limit-o,_.slice_del()));break;case 3:p()&&(_.slice_del(),h());break;case 4:p()&&_.slice_del();break;case 5:p()&&u&&_.slice_del()}_.cursor=_.limit-s,_.out_grouping_b(d,73,232)&&(t=_.limit-_.cursor,_.find_among_b(l,4)&&_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-t,_.ket=_.cursor,_.cursor>_.limit_backward&&(_.cursor--,_.bra=_.cursor,_.slice_del())))}(),_.cursor=_.limit_backward,function(){for(var r;;)if(_.bra=_.cursor,r=_.find_among(n,3))switch(_.ket=_.cursor,r){case 1:_.slice_from("y");break;case 2:_.slice_from("i");break;case 3:if(_.cursor>=_.limit)return;_.cursor++}}(),!0}},function(r){return"function"==typeof r.update?r.update(function(r){return e.setCurrent(r),e.stem(),e.getCurrent()}):(e.setCurrent(r),e.stem(),e.getCurrent())}),r.Pipeline.registerFunction(r.nl.stemmer,"stemmer-nl"),r.nl.stopWordFilter=r.generateStopWordFilter(" aan al alles als altijd andere ben bij daar dan dat de der deze die dit doch doen door dus een eens en er ge geen geweest haar had heb hebben heeft hem het hier hij hoe hun iemand iets ik in is ja je kan kon kunnen maar me meer men met mij mijn moet na naar niet niets nog nu of om omdat onder ons ook op over reeds te tegen toch toen tot u uit uw van veel voor want waren was wat werd wezen wie wil worden wordt zal ze zelf zich zij zijn zo zonder zou".split(" ")),r.Pipeline.registerFunction(r.nl.stopWordFilter,"stopWordFilter-nl")}});