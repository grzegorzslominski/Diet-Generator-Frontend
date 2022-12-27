import ImageProfile from "../../../../../assets/dashboard/images/userProfile.png"

export interface MealsI {
  id: string;
  userName: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: CommentsI[];
}

export interface CommentsI {
  userName: string;
  comment: string;
  likes: number;
}

export const Meals: MealsI[] = [
  {
    id: "1",
    userName: "Mikolaj W",
    title: "Szarlotka z jablkiem i pomarancza ? ",
    description: "Przepis przepis przepis amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
      "\n" +
      "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
    image: ImageProfile,
    likes: 19,
    comments: [
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd",
        likes: 3,
      },
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
        likes: 5,
      }
    ]
  },
  {
    id: "2",
    userName: "Mikolaj W",
    title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
      "\n" +
      "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
    image: ImageProfile,
    likes: 5,
    comments: [
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd",
        likes: 3,
      },
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
        likes: 25,
      }
    ]
  },
  {
    id: "3",
    userName: "Mikolaj W",
    title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
      "\n" +
      "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
    image: ImageProfile,
    likes: 45,
    comments: [
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd",
        likes: 15,
      },
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
        likes: 10,
      }
    ]
  },
  {
    id: "4",
    userName: "Mikolaj W",
    title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
      "\n" +
      "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
    image: ImageProfile,
    likes: 85,
    comments: [
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd",
        likes: 5,
      },
      {
        userName: "Michal",
        comment: "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
        likes:3,
      }
    ]
  },
]