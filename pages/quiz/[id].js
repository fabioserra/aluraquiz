import React from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

const QuizId = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <p>{id}</p>
  );
};

export default function QuizDaGaleraPage({ dbExterno }) {
// const [db, setDb] React.useState({})
// React.useEffect(() => {
// });

  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>

  // <pre style={{ color: 'black' }}>
  //   {JSON.stringify(dbExterno.questions, null, 4)}
  // </pre>
  );
}

export async function getServerSideProps(context) {
  // console.log('Info que o Next da para nós', context);
  console.log('Info que o Next da para nós', context.query);

  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObj) => respostaConvertidaEmObj)
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
