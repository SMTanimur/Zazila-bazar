
import { Shell } from '@/components/shells/shell';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/common/shared/page-header';
import AccountInformation from './components/AccountInformation';
import ClientOnly from '@/components/common/shared/ClientOnly';
import AccountWallets from './components/AccountWallets';

 
export default async function AccountPage() {
  
  return (
    <Shell variant='sidebar' className='bg-gray-100 dark:bg-gray-900 p-3 md:p-8 mt-4 rounded-xl '>
      <PageHeader id='account-header' aria-labelledby='account-header-heading'
       className='relative'
      >
        <PageHeaderHeading size='sm'>
        My Dashboard
        </PageHeaderHeading>
        <div className="border-l-4 border-primary h-7 absolute -left-8 top-0"/>
      </PageHeader>
    
      <section

        className='w-full overflow-hidden'
      >
        <AccountWallets/>
         <ClientOnly>
        <AccountInformation/>
        </ClientOnly>
      </section>
    </Shell>
  );
}
