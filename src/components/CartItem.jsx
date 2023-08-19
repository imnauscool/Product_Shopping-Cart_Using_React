import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className=" flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div>
          <img src={item.image} className=" w-[150px]" />
        </div>
        <div className=" flex flex-col gap-6">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {" "}
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className=" flex justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            >
              <MdOutlineDeleteOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
