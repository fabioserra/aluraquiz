import React from 'react';
import { useRouter } from 'next/router';

const QuizId = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <p>
      Post:
      {id}
    </p>
  );
};

export default function QuizDaGaleraPage() {
  return (
    <div>
      Desafio da proxima aula com animacao
      <QuizId />
    </div>
  );
}
