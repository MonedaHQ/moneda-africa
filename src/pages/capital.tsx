function CapitalPage() {
  return null;
}

export default CapitalPage;

export async function getServerSideProps() {
  return {
    notFound: true,
  };
}
