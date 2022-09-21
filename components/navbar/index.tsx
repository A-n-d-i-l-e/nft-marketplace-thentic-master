import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="border-b p-6" style={{ backgroundColor: "black" }}>
        <p className="text-4x1 font-bold text-white">Demo Marketplace</p>
        <div className="flex mt-4 justify-center">
          <Link href="/">
            <a className="mr-4">Marketplace</a>
          </Link>
          <Link href="/mint-nft">
            <a className="mr-6">Create NFT</a>
          </Link>
        </div>
      </nav>{" "}
    </>
  );
}
