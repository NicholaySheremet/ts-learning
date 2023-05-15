enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
console.log(membership);
console.log(Membership[1]);
console.log(Membership[0]);


enum SocialMedia {
  FB = 'Facebook',
  INST = 'Instagram',
  TG = 'Telegram'
}

const social = SocialMedia.TG;
console.log(social);
