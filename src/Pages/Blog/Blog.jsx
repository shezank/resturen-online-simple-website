import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        02 Nov 2023
                    </p>
                    <div className="mb-3">
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                                What is One way data binding?
                            </p>
                        </a>
                    </div>
                    <p className="mb-4 text-base text-gray-700 md:text-lg">
                        One-way data binding is a concept often used in web development and user interfaces. It refers to the process of updating the content of a user interface element based on changes in a data source, but the reverse doesn't occur. In one-way data binding, the flow of data is unidirectional, moving from the data source to the UI element, but changes made in the UI do not affect the data source.
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" className="mr-3">
                            <img
                                alt="avatar"
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Petru Vîrtos
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 lg:col-span-3">
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            14 Jul 2023
                        </p>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    What is NPM in node.js
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            NPM stands for "Node Package Manager." It is the default package manager for Node.js, which is a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. NPM is an essential tool for managing and distributing JavaScript packages and libraries, particularly those designed to work with Node.js.
                        </p>
                        <div className="flex items-center">
                            <a href="/" aria-label="Author" className="mr-3">
                                <img
                                    alt="avatar"
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                                />
                            </a>
                            <div>
                                <a
                                    href="/"
                                    aria-label="Author"
                                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Alex Stratulat
                                </a>
                                <p className="text-sm font-medium leading-4 text-gray-600">
                                    Author
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            18 Mar 2023
                        </p>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    Different between Mongodb database vs mySQL database
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">

                            MongoDB and MySQL are both popular database management systems, but they have significant differences in terms of data models, architecture, and use cases. Here's a more detailed comparison between MongoDB and MySQL:
                            <br />
                            Data Model: <br />
                            MongoDB is a NoSQL database that uses a flexible, document-oriented data model. It stores data in BSON (Binary JSON) format, allowing for semi-structured data and dynamic schemas.
                            MySQL is a relational database management system (RDBMS) that uses a tabular data model with structured schemas. Data is organized into tables with fixed columns and data types.
                            <br />
                            Schema: <br />
                            MongoDB has a dynamic schema, meaning documents within a collection can have varying structures, and you can add fields to documents without affecting others.
                            MySQL has a rigid schema where the structure of tables and columns must be defined upfront, and any changes to the schema can be complex.

                            Query Language: <br />
                            MongoDB uses a query language designed for querying JSON-like documents. It supports complex queries, indexing, and aggregation operations.
                            MySQL uses SQL (Structured Query Language) for querying, which is well-suited for relational data. SQL provides powerful querying capabilities and supports joins across tables.
                            br
                            Scalability: <br />
                            MongoDB is known for its horizontal scalability, making it suitable for handling large volumes of unstructured or semi-structured data. It can distribute data across multiple servers or clusters.
                            MySQL can scale vertically by adding more resources (CPU, RAM) to a single server, but it may face limitations in terms of scaling horizontally for very large datasets.
                            <br />
                            ACID Compliance: <br />
                            MongoDB provides configurable ACID (Atomicity, Consistency, Isolation, Durability) compliance at the document level. You can choose the level of consistency that suits your application.
                            MySQL is known for strong ACID compliance with support for transactions, making it a good choice for applications with complex data integrity requirements.
                        </p>
                        <div className="flex items-center">
                            <a href="/" aria-label="Author" className="mr-3">
                                <img
                                    alt="avatar"
                                    src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                                />
                            </a>
                            <div>
                                <a
                                    href="/"
                                    aria-label="Author"
                                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Susie the Cat
                                </a>
                                <p className="text-sm font-medium leading-4 text-gray-600">
                                    Author
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Visit the East
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Simple is better"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Simple is better
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Film It!"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Film It!
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;