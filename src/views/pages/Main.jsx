const React = require('react');
const Layout = require('../Layout');

module.exports = function EntriesList({ props }) {
  return (
    <Layout>
      {/* {user ? ( */}
      <a href="/entries/new" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Write about Broccoli</a>
      {/* ) : ( */}
      {/* <a href="/login" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Vali v login</a> */}
      {/* )} */}

      <main role="main" />
    </Layout>
  );
};
