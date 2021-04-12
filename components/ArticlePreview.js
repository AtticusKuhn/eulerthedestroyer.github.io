import Link from '@/components/Link';
import Image from 'next/image';

const ArticlePreview = ({ title, description, id, image }) => {
  return (
    <Link className="outline" href={`/blog/${id}`}>
      <a className="w-full">
        {image && <Image src={image} height={100} width={100} /> }
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
          </div>
          {/* <p className="text-gray-600 dark:text-gray-400">{description}</p> */}
        </div>
      </a>
    </Link>
  );
};

export default ArticlePreview