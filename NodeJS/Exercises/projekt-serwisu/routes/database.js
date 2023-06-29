function database(client, command, object) {

    async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    await movies.insertOne({ title: 'XDDD', gowno: 'XDDD', ajdi: 99 });
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'XDDD' };
    const movie = await movies.find(query);
    const results = await movie.toArray();
    console.log(results.length);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

}

module.exports = database;