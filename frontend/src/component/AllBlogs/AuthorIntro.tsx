interface AuthorIntroProps {
  src?: string;
  name: string;
  authorImg?: string;
}

const AuthorIntro = ({ src, name, authorImg }: AuthorIntroProps) => {
  return (
    <div className="flex gap-2 items-center">
      {authorImg ? (
        <img
          src={authorImg}
          alt="author"
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <button
          className={`py-1 text-xs px-2 rounded-full font-bold bg-gray-300 ${
            src ? `bg-[url(${src})]` : ""
          } `}
        >
          {src ? "" : name[0]}
        </button>
      )}
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
};

export default AuthorIntro;
