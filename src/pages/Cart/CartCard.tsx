import React from "react";
import { useContext } from "react";
import cartContext from "../../store/Cart/cart-context";
import { TProduct } from "../../types/TProduct";

const CartCard = () => {
  const cartCtx = useContext(cartContext);

  const quantityHandler = (isAdding: boolean, product: TProduct) => {};

  return (
    <div className="flex flex-col pt-7 bg-slate-300">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-slate-600 text-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total Price
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartCtx.items.map((product, i) => (
                  <tr
                    key={product.id}
                    className={`border-b ${
                      i % 2 === 0
                        ? "bg-neutral-100 dark:bg-neutral-700"
                        : "bg-white dark:bg-neutral-600"
                    } dark:border-neutral-500 `}
                  >
                    <td className="px-6 py-4 font-medium">{i + 1}</td>
                    <td className="px-6 py-4">{product.title}</td>
                    <td className="px-6 py-4">{product.description}</td>
                    <td className="whitespace-nowrap px-6 py-4 ">
                      <button
                        onClick={() => {
                          quantityHandler(false, product);
                        }}
                        className="w-6 h-6 rounded-full bg-red-600 justify-items-center"
                      >
                        -
                      </button>
                      &nbsp;
                      {product.quantity}
                      &nbsp;
                      <button
                        onClick={() => {
                          quantityHandler(true, product);
                        }}
                        className="w-6 h-6 rounded-full bg-blue-700"
                      >
                        +
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.price.toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {(product.quantity * product.price).toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button onClick={() => {}}>
                        <svg
                          className="fill-black"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}

                <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Total Price: {cartCtx.totalAmount.toFixed(2)} $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartCard);
