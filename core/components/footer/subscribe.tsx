'use client';

import { Button } from '~/components/ui/button';
import { Input, Label } from '~/components/ui/form';

export const Subscribe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='flex items-center flex-1'>
            <p className='text-lg text-white px-4 font-semibold m-0'>Subscribe for Deals & Coupons</p>
            <div className='flex-1'>
                <form className='flex gap-3' onSubmit={handleSubmit}>
                    <div className='flex-1'>
                        <Input
                            name="email"
                            placeholder='Email'
                            className=' flex-1'
                        />
                    </div>
                    <Button className="w-52" type="submit">
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
    );
};
