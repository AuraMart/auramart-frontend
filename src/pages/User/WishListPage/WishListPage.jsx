import SideNavigation from '../../..//components/SideNavigation/SideNavigation';
import Breadcrumb from '../../../components/Wishlist/BreadCumb';
import WishlistItem from '../../../components/Wishlist/WishlistItem';

const WishlistPage = () => {
    const wishlistItems = [
      {
        image: "https://img.faballey.com/images/Product/ITP00975Z/3.jpg",
        title: "Blue Flower Print Crop Top",
        color: "Yellow",
        quantity: 1,
        price: "229.00"
      },
      {
        image: "https://img.faballey.com/images/Product/ITP00975Z/3.jpg",
        title: "Yellow Flower Print Dress",
        color: "Yellow",
        quantity: 1,
        price: "775.00"
      },
      {
        image: "https://img.faballey.com/images/Product/ITP00975Z/3.jpg",
        title: "White Hoodie long sleeve",
        color: "White",
        quantity: 1,
        price: "1134.00"
      },
      {
        image: "https://img.faballey.com/images/Product/ITP00975Z/3.jpg",
        title: "Brown men's long sleeve T-shirt",
        color: "Brown",
        quantity: 1,
        price: "793.00"
      }
    ];
  
    return (
      <div className="flex min-h-screen bg-white">
        {/* Left Sidebar */}
        <aside className="border-r">
          <div className="p-6">
            <h2 className="mb-2 text-xl font-medium">Hello Sandeepa</h2>
            <p className="text-sm text-gray-500">Welcome to your Account</p>
          </div>
          <SideNavigation activeItem="Wishlist" />
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-8">
          <Breadcrumb />
          <h1 className="mb-8 text-2xl font-medium">Wishlist</h1>
          <div className="space-y-4">
            {wishlistItems.map((item, index) => (
              <WishlistItem key={index} {...item} />
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default WishlistPage;