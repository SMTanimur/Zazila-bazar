/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ICategory } from "@/types";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  category: ICategory;
}
const CategoryCard = ({ category }: Props) => {
  return (
    <React.Fragment>
      <div className=" dark:bg-[#1f1f1f] bg-[#f5f5f5] rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px] overflow-hidden px-5 cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/10  space-y-4 group">
        <div className="flex flex-col  mt-3">
          <h5 className="text-xl text-gray-800 dark:text-white font-semibold group-hover:scale-105 group-hover:text-primary transition-all duration-300 ">
            {category.name.length > 9
              ? `${category.name.substring(0, 9)}...`
              : category.name}
          </h5>
          <p className="text-stone-600 dark:group-hover:text-white">{category.products_count} Items</p>
        </div>

        <div className="w-[160px h-[120px] flex justify-center items-center">
          <Image
            className="w-[120px h-[100px]   object-center group-hover:scale-110 hover:transition-all duration-500"
            height={130}
            width={100}
            src={category.image?.img_url}
            alt={category.name}
          />
        </div>
        <Button className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform transition-all w-[140px] duration-500 group-hover:bottom-6 rounded-lg">
          <Link href={"/collection"} className="flex gap-3 items-center">
            <p>Shop Now</p>
            <ChevronRightIcon className="w-5" />
          </Link>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CategoryCard;
