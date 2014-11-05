var exec = require('cordova/exec');

PLUGIN = "OpenIabCordovaPlugin";

function OpenIAB()
{
	this.VERIFY_MODE =
	{
		EVERYTHING:0,
		SKIP:1,
		ONLY_KNOWN:2
	}
   
	this.options = 
	{
		checkInventory:false,
		verifyMode:this.VERIFY_MODE.SKIP,
		discoveryTimeout:5 * 1000,
		checkInventoryTimeout:10 * 1000,
		publicKey: ''
	}

	this.error =
	{
		code:-1,
		message:""
	}

	this.purchase =
	{
        itemType:null,
        orderId:null,
        packageName:null,
        sku:null,
        purchaseTime:null,
        purchaseState:null,
        developerPayload:null,
        token:null,
        originalJson:null,
        signature:null,
	}

	this.skuDetails =
	{
		itemType:null,
        sku:null,
        type:null,
        price:null,
        title:null,
        description:null,
        json:null
	}
}

OpenIAB.prototype.getSkuDetails = function(success, error, sku)
{
	exec(success, error, PLUGIN, "getSkuDetails", [sku]);
}

OpenIAB.prototype.getSkuListDetails = function(success, error, skuList)
{
	exec(success, error, PLUGIN, "getSkuListDetails", [skuList]);
}

OpenIAB.prototype.init = function(success, error, skuList)
{
	exec(success, error, PLUGIN, "init", [this.options, skuList]);
}

OpenIAB.prototype.purchaseProduct = function(success, error, sku, payload)
{
	exec(success, error, PLUGIN, "purchaseProduct", [sku, payload]);
}

OpenIAB.prototype.purchaseSubscription = function(success, error, sku, payload)
{
	exec(success, error, PLUGIN, "purchaseSubscription", [sku, payload]);
}

OpenIAB.prototype.consume = function(success, error, sku)
{
	exec(success, error, PLUGIN, "consume", [sku]);
}

module.exports = new OpenIAB();