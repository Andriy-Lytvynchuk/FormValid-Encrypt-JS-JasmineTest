//TESTING ENCRYPT FUNCTION ========
describe("md5Encrypt(stringIn)", function(){
    it("should return encrypted username value", function(){
        var stringIn = "Humber";
        // expect(md5Encrypt(stringIn)).toMatch(/^[a-z0-9]{32}$/);  
        expect(md5Encrypt(stringIn)).toEqual("bb70530caa93e79bb48a261ead9d46ec");       
    });//end of 'it' block

    it("should return encrypted password value", function(){
        var stringIn = "1";
       // expect(md5Encrypt(stringIn)).toMatch(/^[a-z0-9]{32}$/);  
        expect(md5Encrypt(stringIn)).toEqual("c4ca4238a0b923820dcc509a6f75849b");
    });//end of 'it' block
});//en of 'describe' block

//TESTING checkLogin FUNCTION ===========
describe("checkLogin(usernameIn, passwordIn)", function(){
    it("should return: No username entered", function(){
        var usernameIn = ""; 
        var passwordIn = true||false;
        expect(checkLogin(usernameIn, passwordIn)).toEqual("No username entered");
    });//end of 'it' block

    it("should return: No password entered", function(){
        var usernameIn = true||false; 
        var passwordIn = ""; 
        expect(checkLogin(usernameIn, passwordIn)).toEqual("No password entered");
    });//end of 'it' block

 it("should return: Invalid Username or Password", function(){
        var usernameIn = "Humber";
        var passwordIn = "1";
        usernameStored = "bb70530caa93e79bb48a261ead9d46ec";
        passwordStored = "c4ca4238a0b923820dcc509a6f75849b";
        expect(checkLogin(usernameIn, passwordIn)).not.toEqual("Invalid Username or Password");
    });//end of 'it' block

    it("should return: true", function(){
        var usernameIn  = "Humber"; 
        var passwordIn  = "1"; 
        usernameStored = "bb70530caa93e79bb48a261ead9d46ec";
        passwordStored = "c4ca4238a0b923820dcc509a6f75849b";
        expect(checkLogin(usernameIn, passwordIn)).toEqual(true);
    });//end of 'it' block

});//en of 'describe' block


// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
