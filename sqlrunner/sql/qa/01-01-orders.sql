-- To track integrity of order vs. order item data, counts, demand, etc., we'll keep a running total of discrepancies.
-- Then query view 'qa.order_match_sum' to calc against total # of orders/day.

insert into qa.order_fidelity (
	select *
	from (
		select                                             
		date(collector_tstamp) as order_date,                                           
		substring(page_urlquery,10,9) as tr_order_no,                                            
		sum(tr_total) as sp_tr_demand                                          
		from public.events    
		where app_id='n.com'
		and event='transaction'
		and etl_tstamp in (select max(etl_tstamp) from public.events)
		group by 1,2
	)                                     T1
	left outer join
	(
		select                                              
		date(collector_tstamp) as order_date,                                            
		substring(page_urlquery,10,9) as ti_order_no,                                            
		sum(ti_quantity) as sp_ti_quantity,
		sum((ti_price*ti_quantity)) as sp_ti_demand
		from public.events    
		where app_id='n.com'
		and event='transaction_item'
		and etl_tstamp in (select max(etl_tstamp) from public.events)
		group by 1,2
	)                                     T2
	on T1.tr_order_no = T2.ti_order_no
	where T2.ti_order_no is null
);