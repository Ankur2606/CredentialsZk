import { useEffect, useState } from "react";
import { ConnectButton, useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, LogOut, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const client = createThirdwebClient({
  clientId: "YOUR_CLIENT_ID_HERE", // Replace with your thirdweb client ID
});

export const WalletConnect = () => {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (account?.address) {
      await navigator.clipboard.writeText(account.address);
      setCopied(true);
      toast({
        title: "Address copied!",
        description: "Wallet address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDisconnect = async () => {
    if (wallet) {
      await disconnect(wallet);
      toast({
        title: "Disconnected",
        description: "Wallet disconnected successfully",
      });
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!account ? (
          <motion.div
            key="connect"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
            <div className="relative">
              <ConnectButton
                client={client}
                theme="dark"
                connectButton={{
                  label: "Connect Wallet",
                  className: "!bg-card !text-foreground !border-2 !border-primary/30 hover:!border-primary !rounded-xl !px-8 !py-6 !font-semibold !text-lg !backdrop-blur-xl !transition-all !duration-300",
                }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="connected"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-md opacity-70 animate-pulse-glow" />
            <div className="relative bg-card/80 backdrop-blur-xl border-2 border-primary/50 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-glow" />
                  <div className="relative bg-primary/10 p-3 rounded-full border border-primary/30">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Connected Wallet</p>
                  <div className="flex items-center gap-2">
                    <code className="text-foreground font-mono text-sm bg-background/50 px-3 py-1 rounded-lg border border-primary/20">
                      {formatAddress(account.address)}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDisconnect}
                  className="hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Disconnect
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
