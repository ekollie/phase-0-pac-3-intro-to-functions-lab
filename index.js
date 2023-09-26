function shout(string) {
    return string.toUpperCase();
}  
function logShout(string){
    console.log(shout(string))
}
function whisper(string) {
    return string.toLowerCase();
        }
function logWhisper(string){
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string){
    switch(string){
        case shout(string):
            return "YES INDEED!"
        case "Let's have dinner together!":
            return "I would love to!"
        default:
            return "I can't hear you!"
    }
}
