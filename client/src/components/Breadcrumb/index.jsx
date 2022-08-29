import './index.scss';

const Breadcrumb = ({categories}) => (
    <section className="mx">
        <ul className="container breadcrumb">
            {categories?.map((category, idx) => (
                <li key={category}>
                    <span className={categories.length === (idx + 1) ? 'bold' : ''}>{category}</span>

                    <svg
                        style={categories.length === (idx + 1) ? {display: 'none'} : {}}
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="8"
                    >
                        <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                    </svg>
                </li>
            ))}
        </ul>
    </section>
);

export default Breadcrumb;
