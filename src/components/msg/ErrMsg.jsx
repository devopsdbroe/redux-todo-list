import { ImSpinner9 } from "react-icons/im";
import { motion } from "framer-motion";

const ErrMsg = ({ error }) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ y: { type: "spring", stiffness: 120 } }}
			className="absolute shadow-todoShadow font-titleFont tracking-wide font-medium text-lg top-2 left-[40%] bg-bodyColor px-10 py-4 rounded-sm border-b-[6px] border-b-red-500 text-red-500"
		>
			<p className="flex items-center gap-4">
				<span className="text-xl animate-spin">
					<ImSpinner9 />
				</span>
				{error}
			</p>
		</motion.div>
	);
};

export default ErrMsg;
