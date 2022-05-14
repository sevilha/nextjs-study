import { GetStaticProps } from "next";
import logs from "./logs/logs.json";
import NextLink from 'next/link';
import { Box, Text, Image } from '@skynexui/components';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      logs: logs,
    },
  };
}

export default function Home({logs}) {
  const infos = {
    nome: 'Vinicius Sevilha',
    githubUser: 'sevilha',
  }
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '800px',
        paddingHorizontal: '16px',
      }}
    >
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          margin: '0 auto',
          border: '2px solid #F9703E',
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center' }}
      >
        {infos.nome}
      </Text>
      
      <Box styleSheet={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginTop: '16px',
        gridGap: '16px',
      }}>
        {logs.map(({ app, level, id }) => (
          <Log key={id} app={app} level={level} id={id} />
        ))}
      </Box>
    </Box>
  )
}

function Log({ app, level, id }) {
  return (
    <Box 
      styleSheet={{
        flexDirection: 'column',
        border: '1px solid #F9703E',
        padding: '16px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
        transition: '.3s',
        borderRadius: '4px',
        hover: {
          boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)',
        }
      }}
    >
      <NextLink href={`logs/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{ display:' block', color: '#F9703E', marginBottom: '8px' }}
        >
          {app}
        </Text>
      </NextLink>
      <Text>
        {level.substring(0, 140)}...
      </Text>
    </Box>
  );
}
