import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="bg-[#F7F7F7] text-[#4B5D67]">
      <div className="container">
        <div className="row px-3 text-center">
          <h1 className="mt-5">Popular Blogs</h1>
          <article className="article shadow-md border rounded">
            <h3 className="">Difference between JavaScript and Node.JS</h3>
            <div className="row">
              <div className="col-md-6 col-sm-12 px-3">
                <h5 className="text-center pb-2">JavaScript</h5>
                <p className="text-justify">
                  Javascript is a lightweight, object-oriented scripting
                  language that is used to build dynamic HTML pages with
                  interactive effects on a webpage. JavaScript is also commonly
                  used in game development and mobile app development. It is an
                  interpreted scripting language, and the code can only be
                  executed and run in a web browser. We can use Node.js to
                  execute and run the code outside of the browser. It's also
                  known as a browser's language, and it can be used for both
                  client-side and server-side development.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 px-3">
                <h5 className="text-center pb-2">Node.JS</h5>
                <p className="text-justify">
                  Node.JS is a cross-platform, open-source JavaScript runtime
                  environment that enables JavaScript to be run on the server.
                  Node.js enables JavaScript code to run outside of the browser.
                  Node.js comes with a large number of modules and is mostly
                  used in web creation. It may run on various platforms
                  including, Windows, Linux, Mac OS, etc. It provides a
                  cross-platform runtime environment with event-driven,
                  non-blocking 'asynchronous' I/O for creating highly scalable
                  server-side JavaScript applications
                </p>
              </div>
            </div>
          </article>
          <article className="article shadow-md border rounded">
            <h3 className="">Differences between SQL and NoSQL databases.</h3>
            <div className="row">
              <ul className="text-justify">
                <li className="mb-1">
                  <span className="font-bold">Type – </span>
                  SQL databases are primarily called as Relational Databases
                  (RDBMS) whereas NoSQL database are primarily called as
                  non-relational or distributed database.
                </li>
                <li className="mb-1">
                  <b>Language – </b>
                  SQL databases defines and manipulates data based structured
                  query language (SQL). SQL requires you to use predefined
                  schemas to determine the structure of your data before you
                  work with it. Also all of your data must follow the same
                  structure. A NoSQL database has dynamic schema for
                  unstructured data. Data is stored in many ways which means it
                  can be document-oriented, column-oriented, graph-based or
                  organized as a KeyValue store
                </li>
                <li className="mb-1">
                  <b>The Scalability – </b>
                  In almost all situations SQL databases are vertically scalable
                  meaning you can increase the load on a single server by
                  increasing things like RAM, CPU or SSD. While NoSQL databases
                  are horizontally scalable meaning that you handle more traffic
                  by sharding, or adding more servers in your NoSQL database
                </li>
                <li className="mb-1">
                  <b>The Structure – </b>
                  SQL databases are table-based on the other hand NoSQL
                  databases are either key-value pairs, document-based, graph
                  databases or wide-column stores.
                </li>
                <li className="mb-1">
                  <b>Property followed –</b>
                  SQL databases follow ACID properties (Atomicity, Consistency,
                  Isolation and Durability) whereas the NoSQL database follows
                  the Brewers CAP theorem (Consistency, Availability and
                  Partition tolerance).
                </li>
              </ul>
            </div>
          </article>
          <article className="article shadow-md border rounded">
            <h3 className="">
              What is the purpose of JWT and how does it work?
            </h3>
            <h5>Purpose of JWT</h5>
            <p className="text-justify">
              JSON Web Token in short JWT is a mechanism to verify the owner of
              some JSON data. It's an encoded, URL-safe string that can contain
              an unlimited amount of data (unlike a cookie) and is
              cryptographically signed. JWT defines a compact and self-contained
              way for securely transmitting information between parties as a
              JSON object. This information can be verified and trusted because
              it is digitally signed.
            </p>
            <h5>How does it work</h5>
            <p className="text-justify">
              While using JWT, the identity provider generates a JWT certifying
              user identity and resource server decodes and verifies the
              authenticity of the token using secret salt or public key. When
              user sign-in using username and password or google/facebook,
              authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key. User's Client
              uses the JWT to access protected resources by passing the JWT in
              HTTP Authorization header. Then resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
