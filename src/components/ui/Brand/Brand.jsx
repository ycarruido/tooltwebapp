import Link from "next/link";

function Brand() {
  return (
    <Link href="/">
      <img
            src="/img/tooltesi_logo.svg"
            width={160}
            alt="logo"
        />
      {/* <h1 className="text-sky-900 text-3xl font-bold">
        DACS
      </h1> */}
    </Link>
  );
}
export default Brand;
