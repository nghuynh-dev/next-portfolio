import { Work } from '@/models';
import { Box, Container, Typography } from '@mui/material';
import { WorkList } from '../work';

export function FeaturedWorks() {
  // Call API to get recent post
  const workList: Work[] = [
    {
      id: '1',
      title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      createdAt: '1683367217954',
      updatedAt: '1683367217954',
      tagList: ['Backend'],
      shortDescription: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      fullDescription: '',
      thumbnailUrl: 'https://fastly.picsum.photos/id/1074/1280/768.jpg?hmac=pic_Re9j-OxQ6kiRDJ1H18--yifuHNKqQqFK9_Si96E'
    },
    {
      id: '2',
      title: 'Qui est esse',
      createdAt: '1683367217954',
      updatedAt: '1683367217954',
      tagList: ['DevOps'],
      shortDescription: 'Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      fullDescription: '',
      thumbnailUrl: 'https://fastly.picsum.photos/id/29/1280/768.jpg?hmac=2q_SRamlahIVK5pbHWRMFmk6Ffg5JG1Ahk6XzAj9Oes'
    },
    {
      id: '3',
      title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut',
      createdAt: '1683367217954',
      updatedAt: '1683367217954',
      tagList: ['DevOps'],
      shortDescription: 'Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      fullDescription: '',
      thumbnailUrl: 'https://fastly.picsum.photos/id/553/1280/768.jpg?hmac=_PbtmN3fI8nl3Kv1Gx2SrBeEgrZMZAT7TuwjbGTy9ak'
    }
  ];
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant='h5'>Featured Works</Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
