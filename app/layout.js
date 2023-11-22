import { Montserrat } from 'next/font/google'
import './bootstrap-grid.min.css'
import './bootstrap.min.css'
import './globals.css'

const mongo = require('mongodb').MongoClient;

mongo.connect(
    'mongodb://localhost:27017',
    (err, client) => {
        if (err) {
            console.log('Connection error: ', err);
            throw err;
        }

        console.log('Connected');

        const db = client.db('main');
        const posts = db.createCollection('posts');
    }
);


const montserrat = Montserrat({
  weight: ['500', '600', '700'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
