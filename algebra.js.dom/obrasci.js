// 1. napisite modul za brojanje broja koraka
// modul ce se brinuti o pocevanju broja koraka
// a izvana ce se moci pristupiti dvijema metodama modula:
// walk() i getTotalSteps().
// 2. exportajte modul iz datoteke.

var brojanjeKoraka = (function (){
    // TO DO: dio koda za povecavanje broja koraka
    var koraci = 0;
    function increaseSteps(){
        koraci++;
    }

    return {
        walk: function() {
            increaseSteps();
        },
        getTotalSteps: function(){
            return koraci;
        },
        run: function() {
            koraci+=5;
        },
    };
})();

module.exports = brojanjeKoraka;