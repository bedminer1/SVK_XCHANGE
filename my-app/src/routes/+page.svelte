<script>
    export let data
    $: exchangeData = data.exchangeData

    $: baseCurrency = data.baseCurrency
    $: targetCurrency = data.targetCurrency

    let amount
    $: calculatedAmount =(amount * parseFloat(exchangeData.data[targetCurrency].value)).toFixed(2)
</script>


<div class='flex flex-col justify-center items-center h-[80vh] gap-10'>
    <h1 class='text-5xl'>CURRENCY EXCHANGER</h1>
   <div class="text-2xl">
        <form method="get" action="/" class="flex flex-col items-center justify-center gap-2">
            <input type="text" name="baseCurrency" placeholder="Base Currency" class="px-2 text-gray-700"/>
            <input type="text" name="targetCurrency" placeholder="Target Currency" class="px-2 text-gray-700"/>
            <input type="numeric" name="amount" placeholder="Amount" class="px-2 text-gray-700" bind:value={amount}/>
            <button type="submit">Search</button>
        </form>
    </div>

    <div class="text-3xl text-center">
        {#if !exchangeData}
        <p>No data yet</p>
        {:else}
            <h1>{data.baseCurrency} to {data.targetCurrency}</h1>
            <h4>{exchangeData.data[targetCurrency].value.toFixed(4)} {data.targetCurrency}/{data.baseCurrency}</h4>
            {#if amount}
            <h4>{amount}{baseCurrency} converts to {calculatedAmount} {targetCurrency}</h4>
            {/if}
        {/if}
    </div> 
</div>
