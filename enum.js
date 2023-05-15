var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership);
console.log(Membership[1]);
console.log(Membership[0]);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FB"] = "Facebook";
    SocialMedia["INST"] = "Instagram";
    SocialMedia["TG"] = "Telegram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.TG;
console.log(social);
