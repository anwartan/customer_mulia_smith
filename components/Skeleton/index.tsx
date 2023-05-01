interface props {
  width?: string | number;
  height?: string | number;
}

export const Skeleton = ({ width = "100%", height = "1rem" }: props) => {
  return (
    <div
      className="skeleton skeleton-item"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default Skeleton;
